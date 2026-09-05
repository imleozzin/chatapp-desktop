// Servidor: múltiplos servidores/comunidades (com convite), canais dinâmicos,
// chat em tempo real, DMs, voz, compartilhamento de tela, avatares, reações,
// anexos e persistência real em banco de dados (Supabase/Postgres).

const express = require("express");
const http = require("http");
const cors = require("cors");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const { Server } = require("socket.io");
const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("Faltam as variáveis de ambiente SUPABASE_URL e/ou SUPABASE_KEY.");
  process.exit(1);
}
const db = createClient(SUPABASE_URL, SUPABASE_KEY);
const ADMIN_USERNAME = (process.env.ADMIN_USERNAME || "").toLowerCase();
const DEFAULT_SERVER_ID = "default-server";

const app = express();
app.use(cors());
app.get("/", (_req, res) => res.send("Servidor de chat rodando ✅"));

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
  maxHttpBufferSize: 8 * 1024 * 1024,
});
const PORT = process.env.PORT || 3000;

// ---------- Estado só-em-memória ----------
const voiceMembers = {}; // channelId -> Set(socket.id)
const screenSharers = new Map(); // channelId -> socket.id
const onlineUsers = new Map(); // socket.id -> { username, avatar, textChannel, serverId }
const usernameToSocket = new Map(); // username -> socket.id
const userStatus = new Map(); // username -> 'online' | 'away' | 'busy' | 'offline'
let channelsByServer = {}; // serverId -> [channels]
let categoriesByServer = {}; // serverId -> [categories]
let emojisByServer = {}; // serverId -> [custom emojis]

function dmKey(a, b) { return [a, b].sort().join("|"); }
function friendKey(a, b) { return [a, b].sort(); }
function genInviteCode() {
  return Math.random().toString(36).slice(2, 6) + "-" + Math.random().toString(36).slice(2, 6);
}
function genServerId(name) {
  return "srv-" + name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 24) + "-" + Date.now().toString(36).slice(-4);
}
async function getRole(username, serverId) {
  const { data } = await db.from("server_members").select("role").eq("server_id", serverId).eq("username", username).maybeSingle();
  return data ? data.role : null;
}

async function loadChannelsForServer(serverId) {
  const { data, error } = await db.from("channels").select("*").eq("server_id", serverId).order("created_at", { ascending: true });
  if (error) { console.error("Erro ao carregar canais:", error.message); return []; }
  channelsByServer[serverId] = data;
  for (const c of data) if (c.type === "voice" && !voiceMembers[c.id]) voiceMembers[c.id] = new Set();

  const { data: cats } = await db.from("categories").select("*").eq("server_id", serverId).order("created_at", { ascending: true });
  categoriesByServer[serverId] = cats || [];

  const { data: emojis } = await db.from("custom_emojis").select("*").eq("server_id", serverId);
  emojisByServer[serverId] = emojis || [];

  return data;
}

function emitChannelList(serverId) {
  pushChannelListToServer(serverId);
}

async function getVisibleChannels(serverId, username, role) {
  const all = channelsByServer[serverId] || [];
  if (role === "owner") return all;
  const { data: access } = await db.from("channel_members").select("channel_id").eq("username", username);
  const allowedIds = new Set((access || []).map((r) => r.channel_id));
  return all.filter((c) => !c.is_private || allowedIds.has(c.id));
}

async function pushChannelListToServer(serverId) {
  const { data: members } = await db.from("server_members").select("username, role").eq("server_id", serverId);
  for (const m of members || []) {
    const socketId = usernameToSocket.get(m.username);
    if (!socketId) continue;
    const visible = await getVisibleChannels(serverId, m.username, m.role);
    io.to(socketId).emit("channel-list", {
      serverId, channels: visible,
      categories: categoriesByServer[serverId] || [],
      emojis: emojisByServer[serverId] || [],
    });
  }
}

async function ensureMembership(username, serverId, forceOwner) {
  const { data: existing } = await db.from("server_members").select("*").eq("server_id", serverId).eq("username", username).maybeSingle();
  if (existing) return existing.role;
  const { count } = await db.from("server_members").select("*", { count: "exact", head: true }).eq("server_id", serverId);
  const role = forceOwner || count === 0 ? "owner" : "member";
  await db.from("server_members").insert({ server_id: serverId, username, role });
  return role;
}

async function getFriendsData(username) {
  const { data } = await db.from("friendships").select("*").or(`user_a.eq.${username},user_b.eq.${username}`);
  const rows = data || [];
  const friends = [];
  const incoming = [];
  const outgoing = [];
  for (const row of rows) {
    const other = row.user_a === username ? row.user_b : row.user_a;
    if (row.status === "accepted") friends.push(other);
    else if (row.status === "pending") {
      if (row.requested_by === username) outgoing.push(other);
      else incoming.push(other);
    }
  }
  return { friends, incoming, outgoing };
}

async function sendFriendsList(username) {
  const socketId = usernameToSocket.get(username);
  if (!socketId) return;
  const data = await getFriendsData(username);
  io.to(socketId).emit("friends-list", data);
}

async function getUserServers(username) {
  const { data } = await db
    .from("server_members").select("server_id, role, servers(id, name, invite_code, icon)")
    .eq("username", username);
  return (data || []).map((row) => ({
    id: row.servers.id,
    name: row.servers.name,
    icon: row.servers.icon || null,
    inviteCode: row.role === "owner" ? row.servers.invite_code : undefined,
    role: row.role,
  }));
}

async function upsertUser(username, avatar) {
  const { data: existing } = await db.from("users").select("*").eq("username", username).maybeSingle();
  if (existing) {
    if (avatar) await db.from("users").update({ avatar }).eq("username", username);
    return;
  }
  await db.from("users").insert({ username, avatar: avatar || null, role: "member" });
}

function broadcastServerUserList(serverId, channel) {
  const users = [...onlineUsers.values()]
    .filter((u) => u.serverId === serverId && u.textChannel === channel)
    .map((u) => ({ username: u.username, avatar: u.avatar, status: userStatus.get(u.username) || "online", role: u.role || "member" }));
  io.to(channel).emit("user-list", users);
}

function broadcastOnlineForDm() {
  const all = [...onlineUsers.values()].map((u) => ({ username: u.username, avatar: u.avatar, status: userStatus.get(u.username) || "online" }));
  io.emit("online-users", all);
}

io.on("connection", (socket) => {
  console.log(`[connection] NOVA CONEXÃO recebida! socket.id=${socket.id}, de: ${socket.handshake.address}`);
  socket.onAny((eventName, ...args) => {
    console.log(`[onAny] evento recebido: "${eventName}"`);
  });
  // ---------- Identificação inicial (uma vez por conexão) ----------
  // ---------- Autenticação ----------
  async function completeAuth(username, avatar) {
    usernameToSocket.set(username, socket.id);
    userStatus.set(username, "online");
    socket.data.username = username;
    socket.data.avatar = avatar || null;
    await ensureMembership(username, DEFAULT_SERVER_ID, username.toLowerCase() === ADMIN_USERNAME);

    const token = crypto.randomBytes(24).toString("hex");
    await db.from("sessions").insert({ token, username });
    socket.emit("auth-success", { username, avatar: avatar || null, token });

    const servers = await getUserServers(username);
    socket.emit("server-list", servers);
    await sendFriendsList(username);
    broadcastOnlineForDm();
  }

  socket.on("register", async ({ username, password, avatar, email, birthDate }) => {
    console.log(`[register] pedido recebido para username="${username}"`);
    try {
      username = (username || "").trim().slice(0, 24);
      if (!username || !password || password.length < 4) {
        console.log("[register] falhou: nome ou senha inválidos");
        socket.emit("auth-error", "Preencha um nome e uma senha com pelo menos 4 caracteres.");
        return;
      }
      if (!birthDate) {
        console.log("[register] falhou: sem data de nascimento");
        socket.emit("auth-error", "Preencha sua data de nascimento.");
        return;
      }
      const age = Math.floor((Date.now() - new Date(birthDate).getTime()) / (365.25 * 24 * 60 * 60 * 1000));
      if (age < 13) {
        console.log("[register] falhou: idade insuficiente");
        socket.emit("auth-error", "Você precisa ter pelo menos 13 anos para criar uma conta.");
        return;
      }
      const { data: existing, error: selectError } = await db.from("users").select("*").eq("username", username).maybeSingle();
      if (selectError) { console.log("[register] erro ao consultar usuário:", selectError.message); }
      if (existing && existing.password_hash) {
        console.log("[register] falhou: nome já em uso");
        socket.emit("auth-error", "Esse nome de usuário já está em uso.");
        return;
      }
      const password_hash = await bcrypt.hash(password, 10);
      const userData = { password_hash, avatar: avatar || existing?.avatar || null, email: email || null, birth_date: birthDate };
      if (existing) {
        const { error } = await db.from("users").update(userData).eq("username", username);
        if (error) console.log("[register] erro ao atualizar usuário:", error.message);
      } else {
        const { error } = await db.from("users").insert({ username, role: "member", ...userData });
        if (error) console.log("[register] erro ao inserir usuário:", error.message);
      }
      console.log(`[register] sucesso para username="${username}", chamando completeAuth`);
      await completeAuth(username, userData.avatar);
      console.log(`[register] completeAuth terminou para username="${username}"`);
    } catch (err) {
      console.log("[register] ERRO INESPERADO:", err.message, err.stack);
      socket.emit("auth-error", "Erro interno no servidor: " + err.message);
    }
  });

  socket.on("login", async ({ username, password }) => {
    username = (username || "").trim();
    const { data: user } = await db.from("users").select("*").eq("username", username).maybeSingle();
    if (!user || !user.password_hash) {
      socket.emit("auth-error", "Usuário não encontrado.");
      return;
    }
    const ok = await bcrypt.compare(password || "", user.password_hash);
    if (!ok) {
      socket.emit("auth-error", "Senha incorreta.");
      return;
    }
    if (usernameToSocket.has(username) && usernameToSocket.get(username) !== socket.id) {
      socket.emit("auth-error", "Essa conta já está conectada em outro lugar.");
      return;
    }
    await completeAuth(username, user.avatar);
  });

  socket.on("login-with-token", async ({ token }) => {
    if (!token) { socket.emit("auth-error", "Sessão expirada, faça login de novo."); return; }
    const { data: session } = await db.from("sessions").select("*").eq("token", token).maybeSingle();
    if (!session) { socket.emit("auth-error", "Sessão expirada, faça login de novo."); return; }
    const { data: user } = await db.from("users").select("*").eq("username", session.username).maybeSingle();
    if (!user) { socket.emit("auth-error", "Sessão expirada, faça login de novo."); return; }
    if (usernameToSocket.has(user.username) && usernameToSocket.get(user.username) !== socket.id) {
      socket.emit("auth-error", "Essa conta já está conectada em outro lugar.");
      return;
    }
    await completeAuth(user.username, user.avatar);
  });

  socket.on("logout", async ({ token }) => {
    if (token) await db.from("sessions").delete().eq("token", token);
  });

  socket.on("update-avatar", async (avatarDataUrl) => {
    const username = socket.data.username;
    if (!username) return;
    socket.data.avatar = avatarDataUrl;
    const user = onlineUsers.get(socket.id);
    if (user) user.avatar = avatarDataUrl;
    await db.from("users").update({ avatar: avatarDataUrl }).eq("username", username);
    const user2 = onlineUsers.get(socket.id);
    if (user2) broadcastServerUserList(user2.serverId, user2.textChannel);
    broadcastOnlineForDm();
  });

  // ---------- Servidores (comunidades) ----------
  socket.on("create-server", async ({ name }) => {
    const username = socket.data.username;
    if (!username || !name?.trim()) return;
    const id = genServerId(name);
    const inviteCode = genInviteCode();
    await db.from("servers").insert({ id, name: name.trim().slice(0, 40), invite_code: inviteCode });
    await db.from("server_members").insert({ server_id: id, username, role: "owner" });
    await db.from("channels").insert([
      { id: id + "-geral", name: "geral", type: "text", server_id: id, created_by: username },
      { id: id + "-voz", name: "Geral", type: "voice", server_id: id, created_by: username },
    ]);
    voiceMembers[id + "-voz"] = new Set();
    const servers = await getUserServers(username);
    socket.emit("server-list", servers);
    socket.emit("server-created", { serverId: id });
  });

  socket.on("join-server-by-code", async ({ code }) => {
    const username = socket.data.username;
    if (!username || !code?.trim()) return;
    const { data: srv } = await db.from("servers").select("*").eq("invite_code", code.trim()).maybeSingle();
    if (!srv) { socket.emit("join-server-error", "Código de convite inválido."); return; }
    await ensureMembership(username, srv.id, false);
    const servers = await getUserServers(username);
    socket.emit("server-list", servers);
    socket.emit("server-created", { serverId: srv.id });
  });

  // ---------- Selecionar servidor / canal ----------
  socket.on("select-server", async ({ serverId }) => {
    const username = socket.data.username;
    if (!username) return;
    const { data: membership } = await db.from("server_members").select("role").eq("server_id", serverId).eq("username", username).maybeSingle();
    if (!membership) return;

    await loadChannelsForServer(serverId);
    const visible = await getVisibleChannels(serverId, username, membership.role);
    socket.emit("channel-list", { serverId, channels: visible, categories: categoriesByServer[serverId], emojis: emojisByServer[serverId] });
    socket.emit("my-role", { serverId, role: membership.role });
  });

  socket.on("join-channel", async ({ channel, serverId }) => {
    const username = socket.data.username;
    if (!username) return;
    const channels = channelsByServer[serverId] || await loadChannelsForServer(serverId);
    const targetChannel = channels.find((c) => c.id === channel && c.type === "text");
    if (!targetChannel) return;

    if (targetChannel.is_private) {
      const role = await getRole(username, serverId);
      if (role !== "owner") {
        const { data: access } = await db.from("channel_members").select("channel_id").eq("channel_id", channel).eq("username", username).maybeSingle();
        if (!access) return; // sem acesso ao canal privado
      }
    }

    const prev = onlineUsers.get(socket.id);
    if (prev) { socket.leave(prev.textChannel); broadcastServerUserList(prev.serverId, prev.textChannel); }

    socket.join(channel);
    const role = await getRole(username, serverId);
    onlineUsers.set(socket.id, { username, avatar: socket.data.avatar, textChannel: channel, serverId, role });

    const { data: history } = await db.from("messages").select("*").eq("channel_id", channel).order("timestamp", { ascending: true }).limit(200);
    socket.emit("chat-history", history || []);
    socket.emit("screen-share-status", { active: screenSharers.has(channel) });

    const voiceChannel = channels.find((c) => c.type === "voice");
    if (voiceChannel) {
      socket.emit("voice-members", { channelId: voiceChannel.id, members: [...(voiceMembers[voiceChannel.id] || [])].map((id) => onlineUsers.get(id)?.username).filter(Boolean) });
    }

    broadcastServerUserList(serverId, channel);
    if (!prev) socket.to(channel).emit("system-message", `${username} entrou no canal.`);
  });

  // ---------- Canais (criar/apagar) — só quem é "owner" daquele servidor ----------
  socket.on("create-channel", async ({ name, type, serverId, categoryId, isPrivate, inviteUsernames }) => {
    const username = socket.data.username;
    const { data: membership } = await db.from("server_members").select("role").eq("server_id", serverId).eq("username", username).maybeSingle();
    if (!membership || membership.role !== "owner" || !name?.trim()) return;

    const id = (type === "voice" ? "voz-" : "") + name.trim().toLowerCase().replace(/\s+/g, "-").slice(0, 32) + "-" + Date.now().toString(36).slice(-4);
    const channel = { id, name: name.trim().slice(0, 32), type: type === "voice" ? "voice" : "text", server_id: serverId, created_by: username, category_id: categoryId || null, is_private: !!isPrivate };
    const { error } = await db.from("channels").insert(channel);
    if (error) return;
    if (channel.type === "voice") voiceMembers[id] = new Set();

    if (isPrivate) {
      const names = new Set([username, ...(inviteUsernames || [])]);
      await db.from("channel_members").insert([...names].map((u) => ({ channel_id: id, username: u })));
    }

    await loadChannelsForServer(serverId);
    await emitChannelList(serverId);
  });

  socket.on("delete-channel", async ({ id, serverId }) => {
    const username = socket.data.username;
    const { data: membership } = await db.from("server_members").select("role").eq("server_id", serverId).eq("username", username).maybeSingle();
    if (!membership || membership.role !== "owner") return;
    await db.from("channels").delete().eq("id", id);
    delete voiceMembers[id];
    await loadChannelsForServer(serverId);
    await emitChannelList(serverId);
  });

  // ---------- Categorias — só o "owner" do servidor ----------
  socket.on("create-category", async ({ name, serverId }) => {
    const username = socket.data.username;
    const { data: membership } = await db.from("server_members").select("role").eq("server_id", serverId).eq("username", username).maybeSingle();
    if (!membership || membership.role !== "owner" || !name?.trim()) return;
    const id = "cat-" + name.trim().toLowerCase().replace(/\s+/g, "-").slice(0, 24) + "-" + Date.now().toString(36).slice(-4);
    await db.from("categories").insert({ id, server_id: serverId, name: name.trim().slice(0, 32) });
    await loadChannelsForServer(serverId);
    await emitChannelList(serverId);
  });

  // ---------- Chat de texto ----------
  socket.on("chat-message", async ({ text, attachment, replyToId }) => {
    const user = onlineUsers.get(socket.id);
    if (!user) return;
    if (!text?.trim() && !attachment) return;

    const msg = {
      id: Date.now() + "-" + socket.id,
      channel_id: user.textChannel,
      username: user.username,
      avatar: user.avatar,
      text: (text || "").trim().slice(0, 2000),
      attachment: attachment ? { name: String(attachment.name || "arquivo").slice(0, 120), type: String(attachment.type || "").slice(0, 60), dataUrl: attachment.dataUrl } : null,
      reactions: {},
      reply_to_id: replyToId || null,
      timestamp: Date.now(),
    };
    await db.from("messages").insert(msg);
    io.to(user.textChannel).emit("chat-message", msg);
  });

  socket.on("toggle-reaction", async ({ messageId, emoji }) => {
    const user = onlineUsers.get(socket.id);
    if (!user) return;
    const { data: msg } = await db.from("messages").select("*").eq("id", messageId).maybeSingle();
    if (!msg) return;
    const reactions = msg.reactions || {};
    if (!reactions[emoji]) reactions[emoji] = [];
    const idx = reactions[emoji].indexOf(user.username);
    if (idx >= 0) reactions[emoji].splice(idx, 1); else reactions[emoji].push(user.username);
    if (reactions[emoji].length === 0) delete reactions[emoji];
    await db.from("messages").update({ reactions }).eq("id", messageId);
    io.to(user.textChannel).emit("message-updated", { ...msg, reactions });
  });

  socket.on("edit-message", async ({ messageId, text }) => {
    const user = onlineUsers.get(socket.id);
    if (!user || !text?.trim()) return;
    const { data: msg } = await db.from("messages").select("*").eq("id", messageId).maybeSingle();
    if (!msg || msg.username !== user.username) return;
    const updated = { ...msg, text: text.trim().slice(0, 2000), edited: true };
    await db.from("messages").update({ text: updated.text, edited: true }).eq("id", messageId);
    io.to(user.textChannel).emit("message-updated", updated);
  });

  socket.on("delete-message", async ({ messageId }) => {
    const user = onlineUsers.get(socket.id);
    if (!user) return;
    const { data: msg } = await db.from("messages").select("*").eq("id", messageId).maybeSingle();
    if (!msg) return;
    if (msg.username !== user.username) {
      const role = await getRole(user.username, user.serverId);
      if (role !== "owner" && role !== "moderator") return;
    }
    await db.from("messages").delete().eq("id", messageId);
    io.to(user.textChannel).emit("message-deleted", { messageId });
  });

  socket.on("pin-message", async ({ messageId }) => {
    const user = onlineUsers.get(socket.id);
    if (!user) return;
    const role = await getRole(user.username, user.serverId);
    if (role !== "owner" && role !== "moderator") return;
    const { data: msg } = await db.from("messages").select("*").eq("id", messageId).maybeSingle();
    if (!msg) return;
    const pinned = !msg.pinned;
    await db.from("messages").update({ pinned }).eq("id", messageId);
    io.to(user.textChannel).emit("message-updated", { ...msg, pinned });
  });

  socket.on("get-pinned", async ({ channelId }) => {
    const { data } = await db.from("messages").select("*").eq("channel_id", channelId).eq("pinned", true).order("timestamp", { ascending: false });
    socket.emit("pinned-list", { channelId, messages: data || [] });
  });

  socket.on("search-messages", async ({ channelId, query }) => {
    if (!query?.trim()) { socket.emit("search-results", { channelId, query, results: [] }); return; }
    const { data } = await db.from("messages").select("*").eq("channel_id", channelId).ilike("text", `%${query.trim()}%`).order("timestamp", { ascending: false }).limit(30);
    socket.emit("search-results", { channelId, query, results: data || [] });
  });

  socket.on("set-status", ({ status }) => {
    const username = socket.data.username;
    if (!username || !["online", "away", "busy", "offline"].includes(status)) return;
    userStatus.set(username, status);
    const user = onlineUsers.get(socket.id);
    if (user) broadcastServerUserList(user.serverId, user.textChannel);
    broadcastOnlineForDm();
  });

  // ---------- "Digitando..." ----------
  socket.on("typing", () => {
    const user = onlineUsers.get(socket.id);
    if (!user) return;
    socket.to(user.textChannel).emit("user-typing", { username: user.username });
  });

  // ---------- Emojis customizados — só "owner" ----------
  socket.on("create-emoji", async ({ name, image, serverId }) => {
    const username = socket.data.username;
    const role = await getRole(username, serverId);
    if (role !== "owner" || !name?.trim() || !image) return;
    const cleanName = name.trim().toLowerCase().replace(/[^a-z0-9_]/g, "").slice(0, 24);
    if (!cleanName) return;
    const id = serverId + "-" + cleanName;
    const { error } = await db.from("custom_emojis").insert({ id, server_id: serverId, name: cleanName, image, created_by: username });
    if (error) return;
    await loadChannelsForServer(serverId);
    emitChannelList(serverId);
  });

  // ---------- Cargo de moderador — só "owner" promove/rebaixa ----------
  socket.on("set-member-role", async ({ targetUsername, role, serverId }) => {
    const username = socket.data.username;
    const requesterRole = await getRole(username, serverId);
    if (requesterRole !== "owner" || !["member", "moderator"].includes(role)) return;
    await db.from("server_members").update({ role }).eq("server_id", serverId).eq("username", targetUsername);
    const targetSocketId = usernameToSocket.get(targetUsername);
    if (targetSocketId) {
      io.to(targetSocketId).emit("my-role", { serverId, role });
      const targetUser = onlineUsers.get(targetSocketId);
      if (targetUser && targetUser.serverId === serverId) {
        targetUser.role = role;
        broadcastServerUserList(serverId, targetUser.textChannel);
      }
    }
  });

  // ---------- Ícone do servidor — só "owner" ----------
  socket.on("update-server-icon", async ({ serverId, icon }) => {
    const username = socket.data.username;
    const role = await getRole(username, serverId);
    if (role !== "owner") return;
    await db.from("servers").update({ icon }).eq("id", serverId);
    io.emit("server-icon-updated", { serverId, icon });
  });

  socket.on("add-channel-member", async ({ channelId, targetUsername, serverId }) => {
    const username = socket.data.username;
    const role = await getRole(username, serverId);
    if (role !== "owner") return;
    await db.from("channel_members").insert({ channel_id: channelId, username: targetUsername }).select();
    await pushChannelListToServer(serverId);
  });

  // ---------- Amigos (independente de servidor) ----------
  socket.on("send-friend-request", async ({ toUsername }) => {
    const username = socket.data.username;
    if (!username || !toUsername || toUsername === username) return;
    const [a, b] = friendKey(username, toUsername);
    const { data: existing } = await db.from("friendships").select("*").eq("user_a", a).eq("user_b", b).maybeSingle();
    if (existing) return;
    await db.from("friendships").insert({ user_a: a, user_b: b, status: "pending", requested_by: username });
    await sendFriendsList(username);
    await sendFriendsList(toUsername);
  });

  socket.on("respond-friend-request", async ({ fromUsername, accept }) => {
    const username = socket.data.username;
    if (!username) return;
    const [a, b] = friendKey(username, fromUsername);
    if (accept) await db.from("friendships").update({ status: "accepted" }).eq("user_a", a).eq("user_b", b);
    else await db.from("friendships").delete().eq("user_a", a).eq("user_b", b);
    await sendFriendsList(username);
    await sendFriendsList(fromUsername);
  });

  socket.on("remove-friend", async ({ friendUsername }) => {
    const username = socket.data.username;
    if (!username) return;
    const [a, b] = friendKey(username, friendUsername);
    await db.from("friendships").delete().eq("user_a", a).eq("user_b", b);
    await sendFriendsList(username);
    await sendFriendsList(friendUsername);
  });

  socket.on("get-friends", async () => {
    const username = socket.data.username;
    if (username) await sendFriendsList(username);
  });

  // ---------- Sair do servidor ----------
  socket.on("leave-server", async ({ serverId }) => {
    const username = socket.data.username;
    if (!username || serverId === DEFAULT_SERVER_ID) return; // não deixa sair do servidor padrão
    await db.from("server_members").delete().eq("server_id", serverId).eq("username", username);
    const servers = await getUserServers(username);
    socket.emit("server-list", servers);
  });

  // ---------- Mensagens diretas (DM) — sempre globais, fora dos servidores ----------
  socket.on("dm-open", async ({ withUsername }) => {
    const username = socket.data.username;
    if (!username) return;
    const { data } = await db.from("dm_messages").select("*")
      .or(`and(from_user.eq.${username},to_user.eq.${withUsername}),and(from_user.eq.${withUsername},to_user.eq.${username})`)
      .order("timestamp", { ascending: true }).limit(200);
    socket.emit("dm-history", { withUsername, messages: (data || []).map((m) => ({ ...m, from: m.from_user, to: m.to_user })) });
  });

  socket.on("dm-message", async ({ toUsername, text }) => {
    const username = socket.data.username;
    if (!username || !text?.trim()) return;
    const row = { id: Date.now() + "-" + socket.id, from_user: username, to_user: toUsername, avatar: socket.data.avatar, text: text.trim().slice(0, 2000), timestamp: Date.now() };
    await db.from("dm_messages").insert(row);
    const msg = { ...row, from: row.from_user, to: row.to_user };
    socket.emit("dm-message", msg);
    const targetSocketId = usernameToSocket.get(toUsername);
    if (targetSocketId) io.to(targetSocketId).emit("dm-message", msg);
  });

  socket.on("edit-dm-message", async ({ messageId, text }) => {
    const username = socket.data.username;
    if (!username || !text?.trim()) return;
    const { data: row } = await db.from("dm_messages").select("*").eq("id", messageId).maybeSingle();
    if (!row || row.from_user !== username) return;
    await db.from("dm_messages").update({ text: text.trim().slice(0, 2000), edited: true }).eq("id", messageId);
    const updated = { ...row, from: row.from_user, to: row.to_user, text: text.trim().slice(0, 2000), edited: true };
    socket.emit("dm-message-updated", updated);
    const targetSocketId = usernameToSocket.get(row.to_user);
    if (targetSocketId) io.to(targetSocketId).emit("dm-message-updated", updated);
  });

  socket.on("delete-dm-message", async ({ messageId }) => {
    const username = socket.data.username;
    if (!username) return;
    const { data: row } = await db.from("dm_messages").select("*").eq("id", messageId).maybeSingle();
    if (!row || row.from_user !== username) return;
    await db.from("dm_messages").delete().eq("id", messageId);
    socket.emit("dm-message-deleted", { messageId });
    const targetSocketId = usernameToSocket.get(row.to_user);
    if (targetSocketId) io.to(targetSocketId).emit("dm-message-deleted", { messageId });
  });

  // ---------- Voz ----------
  socket.on("join-voice", ({ channelId }) => {
    const user = onlineUsers.get(socket.id);
    if (!user || !voiceMembers[channelId]) return;
    const existing = [...voiceMembers[channelId]];
    voiceMembers[channelId].add(socket.id);
    socket.emit("voice-existing-members", { channelId, memberIds: existing });
    existing.forEach((id) => io.to(id).emit("voice-peer-joined", { channelId, peerId: socket.id, username: user.username }));
    io.emit("voice-members", { channelId, members: [...voiceMembers[channelId]].map((id) => onlineUsers.get(id)?.username).filter(Boolean) });
  });

  socket.on("leave-voice", ({ channelId }) => {
    if (!voiceMembers[channelId]) return;
    voiceMembers[channelId].delete(socket.id);
    io.emit("voice-peer-left", { channelId, peerId: socket.id });
    io.emit("voice-members", { channelId, members: [...voiceMembers[channelId]].map((id) => onlineUsers.get(id)?.username).filter(Boolean) });
  });

  // ---------- Compartilhamento de tela ----------
  socket.on("screen-share-start", () => {
    const user = onlineUsers.get(socket.id);
    if (!user || screenSharers.has(user.textChannel)) return;
    screenSharers.set(user.textChannel, socket.id);
    socket.to(user.textChannel).emit("screen-share-started", { sharerId: socket.id, username: user.username });
  });
  socket.on("screen-share-stop", () => {
    const user = onlineUsers.get(socket.id);
    if (!user) return;
    if (screenSharers.get(user.textChannel) === socket.id) { screenSharers.delete(user.textChannel); io.to(user.textChannel).emit("screen-share-stopped", { sharerId: socket.id }); }
  });
  socket.on("request-screen-offer", ({ sharerId }) => { io.to(sharerId).emit("viewer-joined", { viewerId: socket.id }); });

  // ---------- Sinalização WebRTC genérica ----------
  socket.on("rtc-signal", ({ targetId, data }) => { io.to(targetId).emit("rtc-signal", { fromId: socket.id, data }); });

  socket.on("disconnect", () => {
    const username = socket.data.username;
    const user = onlineUsers.get(socket.id);
    if (user) {
      onlineUsers.delete(socket.id);
      broadcastServerUserList(user.serverId, user.textChannel);
      socket.to(user.textChannel).emit("system-message", `${user.username} saiu.`);
      if (screenSharers.get(user.textChannel) === socket.id) { screenSharers.delete(user.textChannel); io.to(user.textChannel).emit("screen-share-stopped", { sharerId: socket.id }); }
    }
    if (username && usernameToSocket.get(username) === socket.id) { usernameToSocket.delete(username); broadcastOnlineForDm(); }
    Object.keys(voiceMembers).forEach((channelId) => {
      if (voiceMembers[channelId].delete(socket.id)) {
        io.emit("voice-peer-left", { channelId, peerId: socket.id });
        io.emit("voice-members", { channelId, members: [...voiceMembers[channelId]].map((id) => onlineUsers.get(id)?.username).filter(Boolean) });
      }
    });
  });
});

server.listen(PORT, () => { console.log(`Servidor rodando em http://localhost:${PORT}`); });
