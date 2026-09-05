// ---------- Ícones (SVG, estilo linha fina) ----------
const ICONS = {
  search: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  pin: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17v5"/><path d="M9 3h6l1 6-2 2v3H8v-3l-2-2 1-6z"/></svg>',
  monitor: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  mic: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/></svg>',
  micOff: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="1" y1="1" x2="23" y2="23"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/><path d="M17 10v2a5 5 0 0 1-7.53 4.33"/><path d="M5 10v2a7 7 0 0 0 .11 1.23"/><line x1="12" y1="19" x2="12" y2="23"/></svg>',
  headphones: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>',
  phoneOff: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45c.98.33 2.03.51 3.13.51a2 2 0 0 1 2 2V20a2 2 0 0 1-2 2C10.5 22 2 13.5 2 3a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2c0 1.1.18 2.15.51 3.13a2 2 0 0 1-.45 2.11L7.29 9.51"/><line x1="23" y1="1" x2="1" y2="23"/></svg>',
  settings: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  plus: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  folderPlus: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>',
  userPlus: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="17" y1="11" x2="23" y2="11"/></svg>',
  attach: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>',
  smile: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
  edit: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  reactAdd: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="9" r="7"/><path d="M6.5 10a2.5 2.5 0 0 0 5 0"/><line x1="16" y1="16" x2="16" y2="20"/><line x1="14" y1="18" x2="18" y2="18"/></svg>',
  shield: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"/></svg>',
  x: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  hash: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>',
  volume: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>',
  pencil: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/></svg>',
  send: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
  update: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>',
  reply: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/></svg>',
  camera: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>',
  cameraOff: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 16v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5 0h3a2 2 0 0 1 2 2v3m0 5.34V19l-3.35-2.35"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',
  lock: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  maximize: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>',
  minimize: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
  inbox: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>',
  help: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  friends: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  mail: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><polyline points="22 6 12 13 2 6"/></svg>',
  channelPlus: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="12" y1="3" x2="12" y2="21"/></svg>',
  image: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
  logout: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
  check: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  clock: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
};


let socket = null;
let username = "";
let myAvatar = null;
let myBanner = null;
let myBio = "";
let myStatus = "online";
let notificationsEnabled = true;
let myServers = [];
let currentServerId = null;
let currentChannel = null;
let currentDmUser = null;
let channels = [];
let categories = [];
const collapsedCategories = new Set();
let customEmojis = [];
let myRole = "member";
let pendingAttachment = null;
let replyTarget = null; // {id, username, text}
let typingTimeout = null;
const typingUsers = new Map(); // username -> timeout id
const unreadChannels = new Set(); // ids de canais com mensagem nova não vista
const unreadDms = new Set(); // usernames com DM nova não vista

const AVATAR_COLORS = ["#f23f42", "#5865f2", "#3ba55c", "#faa61a", "#eb459e", "#00b0f4", "#9b59b6", "#1abc9c"];
const REACTION_EMOJIS = ["👍", "❤️", "😂", "😮", "😢", "🎉"];
const EMOJI_SET = ["😀", "😂", "😍", "👍", "🎉", "🔥", "😮", "😢", "❤️", "🙌", "😎", "🤔"];
const RTC_CONFIG = {
  iceServers: [
    { urls: "stun:stun.l.google.com:19302" },
    { urls: "turn:openrelay.metered.ca:80", username: "openrelayproject", credential: "openrelayproject" },
    { urls: "turn:openrelay.metered.ca:443", username: "openrelayproject", credential: "openrelayproject" },
    { urls: "turn:openrelay.metered.ca:443?transport=tcp", username: "openrelayproject", credential: "openrelayproject" },
  ],
};

let isSharing = false, localScreenStream = null, activeSharerId = null;
const screenPeerConnections = new Map();
let receivingScreenConnection = null;

let inVoiceChannel = null, localVoiceStream = null, isMuted = false, isDeafened = false;
let localCameraStream = null, isCameraOn = false;
const voiceVideoEls = new Map(); // peerId -> tile element
const voicePeerNames = new Map(); // peerId -> username
const voicePeerConnections = new Map();
const voiceAudioEls = new Map();

// ---------- Elementos ----------
const loginScreen = document.getElementById("login-screen");
const appEl = document.getElementById("app");
const loginView = document.getElementById("login-view");
const registerView = document.getElementById("register-view");
const showRegisterLink = document.getElementById("show-register-link");
const showLoginLink = document.getElementById("show-login-link");

const loginUsernameInput = document.getElementById("login-username-input");
const loginPasswordInput = document.getElementById("login-password-input");
const loginSubmitBtn = document.getElementById("login-submit-btn");
const loginError = document.getElementById("login-error");

const registerUsernameInput = document.getElementById("register-username-input");
const registerPasswordInput = document.getElementById("register-password-input");
const registerEmailInput = document.getElementById("register-email-input");
const registerDaySelect = document.getElementById("register-day-select");
const registerMonthSelect = document.getElementById("register-month-select");
const registerYearSelect = document.getElementById("register-year-select");
const registerSubmitBtn = document.getElementById("register-submit-btn");
const registerError = document.getElementById("register-error");

// Popula os seletores de data de nascimento
const MONTHS_PT = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
registerDaySelect.innerHTML = `<option value="">Dia</option>` + Array.from({length:31}, (_,i)=>`<option value="${i+1}">${i+1}</option>`).join("");
registerMonthSelect.innerHTML = `<option value="">Mês</option>` + MONTHS_PT.map((m,i)=>`<option value="${i+1}">${m}</option>`).join("");
const thisYear = new Date().getFullYear();
registerYearSelect.innerHTML = `<option value="">Ano</option>` + Array.from({length:100}, (_,i)=>`<option value="${thisYear-i}">${thisYear-i}</option>`).join("");

const loginAvatarBtn = document.getElementById("login-avatar-btn");
const loginAvatarInput = document.getElementById("login-avatar-input");
const loginAvatarPreview = document.getElementById("login-avatar-preview");

const serverIconsEl = document.getElementById("server-icons");
const addServerBtn = document.getElementById("add-server-btn");
const currentServerNameEl = document.getElementById("current-server-name");

const textChannelsEl = document.getElementById("text-channels");
const voiceChannelsEl = document.getElementById("voice-channels");
const dmListEl = document.getElementById("dm-list");
const currentChannelName = document.getElementById("current-channel-name");
const messagesEl = document.getElementById("messages");
const typingIndicatorEl = document.getElementById("typing-indicator");
const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");
const memberItems = document.getElementById("member-items");
const myAvatarEl = document.getElementById("my-avatar");
const myStatusDot = document.getElementById("my-status-dot");
const myUsernameEl = document.getElementById("my-username");
const updateBtn = document.getElementById("update-btn");

// ---------- Atualização automática do app ----------
window.electronAPI.onUpdateReady(() => updateBtn.classList.remove("hidden"));
updateBtn.addEventListener("click", () => {
  if (confirm("Uma atualização já foi baixada. Reiniciar o app agora para instalar?")) {
    window.electronAPI.installUpdate();
  }
});

const shareBtn = document.getElementById("share-btn");
const screenBanner = document.getElementById("screen-share-banner");
const remoteVideoWrap = document.getElementById("remote-video-wrap");
const remoteVideo = document.getElementById("remote-video");
const fullscreenBtn = document.getElementById("fullscreen-btn");

const searchInput = document.getElementById("search-input");
const searchResultsEl = document.getElementById("search-results");

const pinnedBtn = document.getElementById("pinned-btn");
const pinnedOverlay = document.getElementById("pinned-overlay");
const pinnedListEl = document.getElementById("pinned-list");
const pinnedClose = document.getElementById("pinned-close");

const settingsBtn = document.getElementById("settings-btn");
const settingsOverlay = document.getElementById("settings-overlay");
const settingsServerInput = document.getElementById("settings-server-input");
const settingsStatusSelect = document.getElementById("settings-status-select");
const settingsNotificationsCheckbox = document.getElementById("settings-notifications-checkbox");
const settingsSave = document.getElementById("settings-save");
const settingsLogout = document.getElementById("settings-logout");

const createChannelOverlay = document.getElementById("create-channel-overlay");
const createChannelTitle = document.getElementById("create-channel-title");
const createChannelInput = document.getElementById("create-channel-input");
const createChannelCategorySelect = document.getElementById("create-channel-category");
const createChannelCategoryLabel = document.getElementById("create-channel-category-label");
const createChannelSlowmodeLabel = document.getElementById("create-channel-slowmode-label");
const createChannelSlowmodeInput = document.getElementById("create-channel-slowmode-input");
const createChannelPrivate = document.getElementById("create-channel-private");
const createChannelInviteWrap = document.getElementById("create-channel-invite-wrap");
const createChannelInviteInput = document.getElementById("create-channel-invite-input");
const createChannelConfirm = document.getElementById("create-channel-confirm");
const createChannelCancel = document.getElementById("create-channel-cancel");
let pendingChannelType = "text";

const addTextChannelBtn = document.getElementById("add-text-channel");
const addVoiceChannelBtn = document.getElementById("add-voice-channel");

const addServerOverlay = document.getElementById("add-server-overlay");
const newServerNameInput = document.getElementById("new-server-name-input");
const createServerConfirm = document.getElementById("create-server-confirm");
const joinServerCodeInput = document.getElementById("join-server-code-input");
const joinServerConfirm = document.getElementById("join-server-confirm");
const joinServerError = document.getElementById("join-server-error");

const inviteOverlay = document.getElementById("invite-overlay");
const inviteCodeDisplay = document.getElementById("invite-code-display");
const inviteClose = document.getElementById("invite-close");

const voicePanel = document.getElementById("voice-panel");
const voiceMembersListEl = document.getElementById("voice-members-list");
const voiceBar = document.getElementById("voice-bar");
const voiceBarChannelEl = document.getElementById("voice-bar-channel");
const muteBtn = document.getElementById("mute-btn");
const cameraBtn = document.getElementById("camera-btn");
const deafenBtn = document.getElementById("deafen-btn");
const leaveVoiceBtn = document.getElementById("leave-voice-btn");

const attachBtn = document.getElementById("attach-btn");
const fileInput = document.getElementById("file-input");
const attachmentPreview = document.getElementById("attachment-preview");
const attachmentName = document.getElementById("attachment-name");
const attachmentRemove = document.getElementById("attachment-remove");

const emojiBtn = document.getElementById("emoji-btn");
const emojiPicker = document.getElementById("emoji-picker");
const replyPreview = document.getElementById("reply-preview");
const replyPreviewText = document.getElementById("reply-preview-text");
const replyCancel = document.getElementById("reply-cancel");
const autocompleteList = document.getElementById("autocomplete-list");
const videoGrid = document.getElementById("video-grid");
const slowmodeBanner = document.getElementById("slowmode-banner");
const slowmodeBannerText = document.getElementById("slowmode-banner-text");
const lastSentAtByChannel = new Map(); // channelId -> timestamp, só um palpite local; o servidor sempre valida de novo
let slowmodeInterval = null;

function currentChannelSlowMode() {
  if (currentDmUser || !currentChannel) return 0;
  if (myRole === "owner" || myRole === "moderator") return 0;
  const ch = channels.find((c) => c.id === currentChannel);
  return ch?.slow_mode_seconds || 0;
}
function showSlowModeBanner(remainingMs) {
  clearInterval(slowmodeInterval);
  const tick = () => {
    const secs = Math.ceil(remainingMs / 1000);
    if (secs <= 0) { hideSlowModeBanner(); return; }
    slowmodeBannerText.textContent = `Modo lento: aguarde ${secs}s para enviar outra mensagem.`;
    slowmodeBanner.classList.remove("hidden");
    remainingMs -= 1000;
  };
  tick();
  slowmodeInterval = setInterval(tick, 1000);
}
function hideSlowModeBanner() {
  clearInterval(slowmodeInterval);
  slowmodeInterval = null;
  slowmodeBanner.classList.add("hidden");
}

// ---------- Helpers ----------
function colorForUsername(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
function avatarHtml(username_, avatar, size) {
  if (avatar) return `<img class="avatar-img" style="width:${size}px;height:${size}px" src="${avatar}" />`;
  const color = colorForUsername(username_);
  return `<div class="avatar-fallback" style="width:${size}px;height:${size}px;background:${color}">${escapeHtml(username_[0].toUpperCase())}</div>`;
}
function avatarWithStatusHtml(username_, avatar, size, status) {
  return `<div class="avatar-with-status" style="width:${size}px;height:${size}px">${avatarHtml(username_, avatar, size)}<span class="status-dot status-${status || "online"}"></span></div>`;
}
function renderMessageText(text) {
  let escaped = escapeHtml(text);
  escaped = escaped.replace(/```([\s\S]+?)```/g, (m, code) => `<pre class="msg-code-block">${code}</pre>`);
  escaped = escaped.replace(/`([^`]+)`/g, (m, code) => `<code class="msg-inline-code">${code}</code>`);
  escaped = escaped.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  escaped = escaped.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>");
  escaped = escaped.replace(/:(\w+):/g, (m, name) => {
    const emoji = customEmojis.find((e) => e.name === name);
    return emoji ? `<img class="custom-emoji" src="${emoji.image}" title=":${name}:" />` : m;
  });
  escaped = escaped.replace(/(^|\s)@(\w+)/g, (match, pre, name) => {
    const isMe = name.toLowerCase() === username.toLowerCase();
    return `${pre}<span class="mention${isMe ? " mention-me" : ""}">@${name}</span>`;
  });
  return escaped;
}
function textMentionsMe(text) {
  if (!text) return false;
  const re = /(^|\s)@(\w+)/g;
  let m;
  while ((m = re.exec(text))) if (m[2].toLowerCase() === username.toLowerCase()) return true;
  return false;
}
function readAndResizeImage(file, size) {
  size = size || 128;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = size; canvas.height = size;
        const ctx = canvas.getContext("2d");
        const minSide = Math.min(img.width, img.height);
        const sx = (img.width - minSide) / 2, sy = (img.height - minSide) / 2;
        ctx.drawImage(img, sx, sy, minSide, minSide, 0, 0, size, size);
        resolve(canvas.toDataURL("image/jpeg", 0.85));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}
function notify(title, body) {
  if (!notificationsEnabled) return;
  if (document.hasFocus()) return;
  try { new Notification(title, { body, silent: false }); } catch (_) {}
}

// ---------- Barra de título própria ----------
document.getElementById("win-minimize").addEventListener("click", () => window.electronAPI.minimizeWindow());
document.getElementById("win-maximize").addEventListener("click", () => window.electronAPI.toggleMaximizeWindow());
document.getElementById("win-close").addEventListener("click", () => window.electronAPI.closeWindow());
window.electronAPI.onWindowMaximized((isMax) => {
  document.getElementById("titlebar").classList.toggle("is-maximized", isMax);
});

// ---------- Caixa de entrada (não lidas) ----------
const inboxBtn = document.getElementById("inbox-btn");
const inboxPanel = document.getElementById("inbox-panel");
const inboxList = document.getElementById("inbox-list");
inboxBtn.addEventListener("click", () => {
  inboxPanel.classList.toggle("hidden");
  if (!inboxPanel.classList.contains("hidden")) renderInboxList();
});
function renderInboxList() {
  const items = [];
  channels.filter((c) => c.type === "text" && unreadChannels.has(c.id)).forEach((c) => items.push({ type: "channel", id: c.id, label: "#" + c.name }));
  [...unreadDms].forEach((u) => items.push({ type: "dm", id: u, label: u }));
  inboxList.innerHTML = items.length
    ? items.map((i) => `<div class="inbox-item" data-type="${i.type}" data-id="${escapeHtml(i.id)}"><span class="unread-dot"></span>${escapeHtml(i.label)}</div>`).join("")
    : `<div class="inbox-item" style="opacity:0.6; cursor:default;">Tudo em dia por aqui.</div>`;
}
inboxList.addEventListener("click", (e) => {
  const item = e.target.closest(".inbox-item");
  if (!item || !item.dataset.id) return;
  if (item.dataset.type === "channel") joinChannel(item.dataset.id);
  else openDm(item.dataset.id);
  inboxPanel.classList.add("hidden");
});

// ---------- Sobre o ChatApp ----------
const helpBtn = document.getElementById("help-btn");
const aboutOverlay = document.getElementById("about-overlay");
const aboutClose = document.getElementById("about-close");
helpBtn.addEventListener("click", async () => {
  document.getElementById("about-version").textContent = await window.electronAPI.getAppVersion();
  aboutOverlay.classList.remove("hidden");
});
aboutClose.addEventListener("click", () => aboutOverlay.classList.add("hidden"));

// ---------- Amigos ----------
let friendsData = { friends: [], incoming: [], outgoing: [] };
const friendsRailBtn = document.getElementById("friends-rail-btn");
const friendsHomeEl = document.getElementById("friends-home");
const pendingCountEl = document.getElementById("pending-count");
const friendsListEl = document.getElementById("friends-list");
const friendsPendingListEl = document.getElementById("friends-pending-list");
const addFriendInput = document.getElementById("add-friend-input");
const addFriendConfirm = document.getElementById("add-friend-confirm");
const addFriendError = document.getElementById("add-friend-error");

function showFriendsHome() {
  currentServerId = null;
  currentChannel = null;
  currentDmUser = null;
  renderServerIcons();
  friendsHomeEl.classList.remove("hidden");
  document.getElementById("channel-header").classList.add("hidden");
  messagesEl.classList.add("hidden");
  document.getElementById("message-form").classList.add("hidden");
  document.getElementById("server-sidebar-sections").classList.add("hidden");
  document.getElementById("home-sidebar-header").classList.remove("hidden");
  document.getElementById("member-list-panel").classList.add("hidden");
  socket.emit("get-friends");
}
function hideFriendsHome() {
  friendsHomeEl.classList.add("hidden");
  document.getElementById("channel-header").classList.remove("hidden");
  messagesEl.classList.remove("hidden");
  document.getElementById("message-form").classList.remove("hidden");
  document.getElementById("server-sidebar-sections").classList.remove("hidden");
  document.getElementById("home-sidebar-header").classList.add("hidden");
  document.getElementById("member-list-panel").classList.remove("hidden");
}

friendsRailBtn.addEventListener("click", showFriendsHome);

document.querySelectorAll(".friends-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".friends-tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    document.querySelectorAll(".friends-tab-content").forEach((c) => c.classList.add("hidden"));
    document.getElementById(`friends-tab-${tab.dataset.tab}`).classList.remove("hidden");
  });
});

function renderFriends() {
  pendingCountEl.textContent = friendsData.incoming.length;
  pendingCountEl.classList.toggle("hidden", !friendsData.incoming.length);

  friendsListEl.innerHTML = friendsData.friends.length
    ? friendsData.friends.map((f) => `
        <div class="friend-row" data-username="${escapeHtml(f)}">
          ${avatarHtml(f, null, 32)}
          <span class="friend-name">${escapeHtml(f)}</span>
          <button class="ghost-btn friend-msg-btn">Mensagem</button>
          <button class="icon-btn friend-remove-btn" data-tooltip="Remover amigo">${ICONS.x}</button>
        </div>`).join("")
    : `<div class="friend-row" style="opacity:0.6;">Você ainda não tem amigos adicionados.</div>`;

  const pendingHtml = [
    ...friendsData.incoming.map((f) => `
      <div class="friend-row" data-username="${escapeHtml(f)}">
        ${avatarHtml(f, null, 32)}
        <span class="friend-name">${escapeHtml(f)} <small style="color:var(--text-muted)">quer ser seu amigo</small></span>
        <button class="icon-btn friend-accept-btn" data-tooltip="Aceitar">${ICONS.check}</button>
        <button class="icon-btn friend-decline-btn" data-tooltip="Recusar">${ICONS.x}</button>
      </div>`),
    ...friendsData.outgoing.map((f) => `
      <div class="friend-row" data-username="${escapeHtml(f)}" style="opacity:0.7;">
        ${avatarHtml(f, null, 32)}
        <span class="friend-name">${escapeHtml(f)} <small style="color:var(--text-muted)">pedido enviado</small></span>
      </div>`),
  ].join("");
  friendsPendingListEl.innerHTML = pendingHtml || `<div class="friend-row" style="opacity:0.6;">Nenhum pedido pendente.</div>`;
}

friendsListEl.addEventListener("click", (e) => {
  const row = e.target.closest(".friend-row");
  if (!row) return;
  const uname = row.dataset.username;
  if (e.target.closest(".friend-msg-btn")) { openDm(uname); }
  else if (e.target.closest(".friend-remove-btn")) { if (confirm(`Remover ${uname} dos seus amigos?`)) socket.emit("remove-friend", { friendUsername: uname }); }
});
friendsPendingListEl.addEventListener("click", (e) => {
  const row = e.target.closest(".friend-row");
  if (!row) return;
  const uname = row.dataset.username;
  if (e.target.closest(".friend-accept-btn")) socket.emit("respond-friend-request", { fromUsername: uname, accept: true });
  else if (e.target.closest(".friend-decline-btn")) socket.emit("respond-friend-request", { fromUsername: uname, accept: false });
});
addFriendConfirm.addEventListener("click", () => {
  const uname = addFriendInput.value.trim();
  addFriendError.textContent = "";
  if (!uname) return;
  if (uname === username) { addFriendError.textContent = "Esse é você :)"; return; }
  socket.emit("send-friend-request", { toUsername: uname });
  addFriendInput.value = "";
  addFriendError.textContent = "Pedido enviado (se o nome existir).";
});

// ---------- Cartão de perfil ----------
const myProfileBtn = document.getElementById("my-profile-btn");
const profileCard = document.getElementById("profile-card");
const profileCardAvatar = document.getElementById("profile-card-avatar");
const profileCardName = document.getElementById("profile-card-name");
const profileCardUsername = document.getElementById("profile-card-username");
const profileCardStatusRow = document.getElementById("profile-card-status-row");
const profileCardStatusDot = document.getElementById("profile-card-status-dot");
const profileCardStatusLabel = document.getElementById("profile-card-status-label");
const profileCardStatusMenu = document.getElementById("profile-card-status-menu");
const profileCardAvatarEdit = document.getElementById("profile-card-avatar-edit");
const profileCardSettings = document.getElementById("profile-card-settings");
const profileCardLogout = document.getElementById("profile-card-logout");
const STATUS_LABELS_PT = { online: "Online", away: "Ausente", busy: "Ocupado", offline: "Aparecer offline" };

function refreshProfileCardStatus() {
  profileCardStatusDot.className = "status-dot status-" + myStatus;
  profileCardStatusLabel.textContent = STATUS_LABELS_PT[myStatus] || "Online";
}

myProfileBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  profileCardName.textContent = username;
  profileCardUsername.textContent = "";
  profileCardAvatar.innerHTML = myAvatar ? `<img class="avatar-img" style="width:100%;height:100%" src="${myAvatar}" />` : escapeHtml(username[0]?.toUpperCase() || "?");
  profileCardAvatar.style.background = myAvatar ? "transparent" : colorForUsername(username);
  refreshProfileCardStatus();
  profileCardStatusMenu.classList.add("hidden");
  profileCard.classList.toggle("hidden");
});
document.addEventListener("click", (e) => { if (!e.target.closest("#profile-card") && !e.target.closest("#my-profile-btn")) profileCard.classList.add("hidden"); });

profileCardAvatarEdit.addEventListener("click", () => { profileCard.classList.add("hidden"); openEditProfile(); });
profileCardStatusRow.addEventListener("click", (e) => { e.stopPropagation(); profileCardStatusMenu.classList.toggle("hidden"); });
profileCardStatusMenu.querySelectorAll(".profile-card-status-option").forEach((opt) => {
  opt.addEventListener("click", () => {
    myStatus = opt.dataset.status;
    socket.emit("set-status", { status: myStatus });
    updateMyStatusDot();
    refreshProfileCardStatus();
    profileCardStatusMenu.classList.add("hidden");
  });
});
profileCardSettings.addEventListener("click", () => { profileCard.classList.add("hidden"); settingsBtn.click(); });
profileCardLogout.addEventListener("click", () => settingsLogout.click());

// ---------- Editar perfil (banner, foto, bio) ----------
const editProfileOverlay = document.getElementById("edit-profile-overlay");
const editProfileClose = document.getElementById("edit-profile-close");
const editProfileBannerPreview = document.getElementById("edit-profile-banner-preview");
const editProfileBannerBtn = document.getElementById("edit-profile-banner-btn");
const editProfileBannerInput = document.getElementById("edit-profile-banner-input");
const editProfileAvatarPreview = document.getElementById("edit-profile-avatar-preview");
const editProfileAvatarBtn = document.getElementById("edit-profile-avatar-btn");
const editProfileName = document.getElementById("edit-profile-name");
const editProfileBioInput = document.getElementById("edit-profile-bio-input");
const editProfileSave = document.getElementById("edit-profile-save");

function renderEditProfilePreview() {
  editProfileBannerPreview.style.background = myBanner ? `url(${myBanner}) center/cover` : "linear-gradient(135deg, var(--accent), #a98bff)";
  editProfileAvatarPreview.innerHTML = myAvatar ? `<img class="avatar-img" style="width:100%;height:100%" src="${myAvatar}" />` : escapeHtml(username[0]?.toUpperCase() || "?");
  editProfileAvatarPreview.style.background = myAvatar ? "transparent" : colorForUsername(username);
}
function openEditProfile() {
  editProfileName.textContent = username;
  editProfileBioInput.value = myBio || "";
  renderEditProfilePreview();
  editProfileOverlay.classList.remove("hidden");
}
editProfileClose.addEventListener("click", () => editProfileOverlay.classList.add("hidden"));
editProfileBannerBtn.addEventListener("click", () => editProfileBannerInput.click());
editProfileBannerInput.addEventListener("change", async () => {
  const file = editProfileBannerInput.files[0];
  if (!file) return;
  if (file.type === "image/gif") {
    const reader = new FileReader();
    reader.onload = () => { myBanner = reader.result; renderEditProfilePreview(); };
    reader.readAsDataURL(file);
  } else {
    myBanner = await readAndResizeImage(file, 600);
    renderEditProfilePreview();
  }
});
editProfileAvatarBtn.addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file"; input.accept = "image/*";
  input.onchange = async () => {
    const file = input.files[0];
    if (!file) return;
    myAvatar = await readAndResizeImage(file);
    renderMyAvatar();
    renderEditProfilePreview();
    socket.emit("update-avatar", myAvatar);
    window.electronAPI.setConfig({ avatarDataUrl: myAvatar });
  };
  input.click();
});
editProfileSave.addEventListener("click", () => {
  myBio = editProfileBioInput.value.trim();
  socket.emit("update-profile", { bio: myBio, banner: myBanner });
  editProfileOverlay.classList.add("hidden");
});

// ---------- Ver perfil de outra pessoa ----------
const viewProfileOverlay = document.getElementById("view-profile-overlay");
const viewProfileClose = document.getElementById("view-profile-close");
const viewProfileBanner = document.getElementById("view-profile-banner");
const viewProfileAvatar = document.getElementById("view-profile-avatar");
const viewProfileName = document.getElementById("view-profile-name");
const viewProfileMemberSince = document.getElementById("view-profile-member-since");
const viewProfileBio = document.getElementById("view-profile-bio");
const viewProfileMessageBtn = document.getElementById("view-profile-message-btn");
let viewingProfileUsername = null;

function openUserProfile(targetUsername) {
  if (targetUsername === username) { openEditProfile(); return; }
  viewingProfileUsername = targetUsername;
  socket.emit("get-user-profile", { username: targetUsername });
}
viewProfileClose.addEventListener("click", () => viewProfileOverlay.classList.add("hidden"));
viewProfileMessageBtn.addEventListener("click", () => { viewProfileOverlay.classList.add("hidden"); openDm(viewingProfileUsername); });

// ---------- Início: tenta login salvo ----------
// ---------- Início: conecta e tenta sessão salva ----------
let pendingSessionToken = null;
(async function init() {
  const config = await window.electronAPI.getConfig();
  notificationsEnabled = config.notificationsEnabled !== false;
  pendingSessionToken = config.sessionToken || null;
  loginError.textContent = "Conectando ao servidor... (pode demorar até 1 minuto se ele estiver \"dormindo\")";
  registerError.textContent = loginError.textContent;
  connectSocket(config.serverUrl);
})();

// ---------- Login / Registro ----------
loginAvatarBtn.addEventListener("click", () => loginAvatarInput.click());
loginAvatarInput.addEventListener("change", async () => {
  const file = loginAvatarInput.files[0];
  if (!file) return;
  myAvatar = await readAndResizeImage(file);
  loginAvatarPreview.innerHTML = `<img src="${myAvatar}" />`;
});

showRegisterLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginView.classList.add("hidden");
  registerView.classList.remove("hidden");
  loginError.textContent = "";
});
showLoginLink.addEventListener("click", (e) => {
  e.preventDefault();
  registerView.classList.add("hidden");
  loginView.classList.remove("hidden");
  registerError.textContent = "";
});

function doLogin() {
  const uname = loginUsernameInput.value.trim();
  const pass = loginPasswordInput.value;
  loginError.textContent = "";
  if (!uname || !pass) { loginError.textContent = "Preencha usuário e senha."; return; }
  socket.emit("login", { username: uname, password: pass });
}
loginSubmitBtn.addEventListener("click", doLogin);
loginPasswordInput.addEventListener("keydown", (e) => e.key === "Enter" && doLogin());

function doRegister() {
  console.log("[cliente] botão Criar conta clicado. socket existe?", !!socket, "conectado?", socket && socket.connected);
  const uname = registerUsernameInput.value.trim();
  const pass = registerPasswordInput.value;
  const email = registerEmailInput.value.trim();
  const day = registerDaySelect.value, month = registerMonthSelect.value, year = registerYearSelect.value;
  registerError.textContent = "";
  if (!uname || !pass) { registerError.textContent = "Preencha usuário e senha."; return; }
  if (pass.length < 4) { registerError.textContent = "A senha precisa ter pelo menos 4 caracteres."; return; }
  if (!day || !month || !year) { registerError.textContent = "Preencha sua data de nascimento."; return; }
  const birthDate = `${year}-${String(month).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
  console.log("[cliente] emitindo register para", uname, birthDate);
  socket.emit("register", { username: uname, password: pass, avatar: myAvatar, email: email || null, birthDate });
}
registerSubmitBtn.addEventListener("click", doRegister);
registerPasswordInput.addEventListener("keydown", (e) => e.key === "Enter" && doRegister());

function connectSocket(serverUrl) {
  console.log("[cliente] tentando conectar em:", JSON.stringify(serverUrl));
  socket = io(serverUrl, { reconnectionAttempts: 10, reconnectionDelay: 3000, timeout: 60000 });

  socket.on("connect", () => {
    console.log("[cliente] CONECTADO! socket.id =", socket.id);
    loginError.textContent = "";
    registerError.textContent = "";
    if (pendingSessionToken) {
      socket.emit("login-with-token", { token: pendingSessionToken });
    }
  });

  socket.on("connect_error", (err) => {
    console.log("[cliente] ERRO DE CONEXÃO:", err.message);
    loginError.textContent = "Não foi possível conectar ao servidor.";
    registerError.textContent = "Não foi possível conectar ao servidor.";
  });

  socket.on("disconnect", (reason) => {
    console.log("[cliente] DESCONECTADO. motivo:", reason);
  });

  socket.on("auth-success", ({ username: uname, avatar, token }) => {
    username = uname;
    myAvatar = avatar || null;
    loginScreen.classList.add("hidden");
    appEl.classList.remove("hidden");
    myUsernameEl.textContent = username;
    renderMyAvatar();
    updateMyStatusDot();
    window.electronAPI.setConfig({ sessionToken: token, avatarDataUrl: myAvatar || "" });
    socket.emit("get-user-profile", { username });
  });

  socket.on("auth-error", (msg) => {
    if (pendingSessionToken) {
      // login automático falhou — limpa e mostra a tela de login normal
      pendingSessionToken = null;
      window.electronAPI.setConfig({ sessionToken: "" });
      loginScreen.classList.remove("hidden");
      appEl.classList.add("hidden");
      return;
    }
    if (!registerView.classList.contains("hidden")) registerError.textContent = msg;
    else loginError.textContent = msg;
  });

  socket.on("server-list", (servers) => {
    myServers = servers;
    renderServerIcons();
    if (!currentServerId && servers.length) selectServer(servers[0].id);
    else if (!currentServerId && !servers.length && !currentDmUser) showFriendsHome();
    if (!serverSettingsOverlay.classList.contains("hidden")) {
      const srv = myServers.find((s) => s.id === currentServerId);
      if (srv) { serverSettingsTitle.textContent = srv.name; serverInviteCodeDisplay.value = srv.inviteCode || ""; }
      const nameField = document.activeElement !== serverRenameInput;
      if (srv && nameField) serverRenameInput.value = srv.name;
    }
  });
  socket.on("server-created", ({ serverId }) => selectServer(serverId));
  socket.on("join-server-error", (msg) => { joinServerError.textContent = msg; });
  socket.on("friends-list", (data) => { friendsData = data; renderFriends(); });
  socket.on("account-info", (info) => { settingsEmailDisplay.value = info.email || "Nenhum e-mail cadastrado"; });
  socket.on("account-success", (msg) => { settingsEmailMsg.textContent = ""; settingsPasswordMsg.textContent = ""; alert(msg); });
  socket.on("account-error", (msg) => {
    if (!document.getElementById("account-tab-account").classList.contains("hidden")) {
      if (settingsCurrentPasswordInput.value || settingsNewPasswordInput.value) settingsPasswordMsg.textContent = msg;
      else settingsEmailMsg.textContent = msg;
    }
  });
  socket.on("account-email-updated", ({ email }) => { settingsEmailDisplay.value = email || "Nenhum e-mail cadastrado"; settingsNewEmailInput.value = ""; settingsEmailPasswordInput.value = ""; });
  socket.on("user-profile", (profile) => {
    if (profile.username === username) {
      myBio = profile.bio || "";
      myBanner = profile.banner || null;
      return;
    }
    viewProfileName.textContent = profile.username;
    viewProfileBanner.style.background = profile.banner ? `url(${profile.banner}) center/cover` : "linear-gradient(135deg, var(--accent), #a98bff)";
    viewProfileAvatar.innerHTML = profile.avatar ? `<img class="avatar-img" style="width:100%;height:100%" src="${profile.avatar}" />` : escapeHtml(profile.username[0]?.toUpperCase() || "?");
    viewProfileAvatar.style.background = profile.avatar ? "transparent" : colorForUsername(profile.username);
    viewProfileBio.textContent = profile.bio || "";
    const since = profile.created_at ? new Date(profile.created_at).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" }) : "";
    viewProfileMemberSince.textContent = since ? `Membro desde ${since}` : "";
    viewProfileOverlay.classList.remove("hidden");
  });
  socket.on("server-members-list", ({ serverId, members }) => { if (serverId === currentServerId) renderServerMembersSettings(members); });
  socket.on("server-bans-list", ({ serverId, bans }) => { if (serverId === currentServerId) renderServerBansSettings(bans); });
  socket.on("kicked-from-server", ({ serverId }) => {
    if (serverId === currentServerId) {
      currentServerId = null;
      const next = myServers.find((s) => s.id !== serverId);
      if (next) selectServer(next.id); else showFriendsHome();
    }
  });
  socket.on("server-icon-updated", ({ serverId, icon }) => {
    const srv = myServers.find((s) => s.id === serverId);
    if (srv) srv.icon = icon;
    renderServerIcons();
  });

  socket.on("channel-list", ({ serverId, channels: list, categories: cats, emojis }) => {
    if (serverId !== currentServerId) return;
    channels = list;
    categories = cats || [];
    customEmojis = emojis || [];
    renderChannelLists();
    populateCategorySelect();
    if (!currentChannel && !currentDmUser) {
      const firstText = channels.find((c) => c.type === "text");
      if (firstText) joinChannel(firstText.id);
    }
  });
  socket.on("my-role", ({ serverId, role }) => { if (serverId === currentServerId) { myRole = role; updateRoleUI(); } });

  socket.on("chat-history", renderHistory);
  socket.on("chat-message", (msg) => {
    if (!currentDmUser && msg.channel_id === currentChannel) appendMessage(msg);
    clearTyping(msg.username);
    if (msg.username !== username) {
      const inThisChannel = msg.channel_id === currentChannel && !currentDmUser;
      if (textMentionsMe(msg.text)) notify(`${msg.username} mencionou você`, msg.text);
      else if (!inThisChannel) notify(msg.username, msg.text || "[anexo]");
      if (!inThisChannel) { unreadChannels.add(msg.channel_id); renderChannelLists(); }
    }
  });
  socket.on("message-updated", updateMessageReactions);
  socket.on("message-embed", ({ messageId, embed }) => {
    const el = messagesEl.querySelector(`.msg[data-id="${messageId}"] .msg-embed-wrap`);
    if (el) el.innerHTML = linkEmbedHtml(embed);
  });
  socket.on("message-deleted", ({ messageId }) => { const el = messagesEl.querySelector(`.msg[data-id="${messageId}"]`); if (el) el.remove(); });
  socket.on("slow-mode-blocked", ({ channelId, retryAfterMs }) => { if (channelId === currentChannel) showSlowModeBanner(retryAfterMs); });
  socket.on("system-message", appendSystemMessage);
  socket.on("user-list", ({ serverId, members }) => { if (serverId === currentServerId) renderMemberList(members); });
  socket.on("online-users", (users) => { lastOnlineUsers = users; renderDmList(users); });
  socket.on("user-typing", ({ username: who }) => showTyping(who));

  socket.on("pinned-list", ({ channelId, messages }) => {
    if (channelId !== currentChannel) return;
    pinnedListEl.innerHTML = messages.length
      ? messages.map((m) => `<div class="pinned-item"><b>${escapeHtml(m.username)}</b>: ${escapeHtml((m.text || "").slice(0, 140))}</div>`).join("")
      : `<div class="pinned-item" style="opacity:0.6">Nenhuma mensagem fixada ainda.</div>`;
  });
  socket.on("search-results", ({ channelId, results }) => {
    if (channelId !== currentChannel) return;
    searchResultsEl.innerHTML = results.length
      ? results.map((m) => `<div class="search-result-item"><b>${escapeHtml(m.username)}</b>: ${escapeHtml((m.text || "").slice(0, 140))}<span class="search-result-time">${new Date(m.timestamp).toLocaleString("pt-BR")}</span></div>`).join("")
      : `<div class="search-result-item" style="opacity:0.6">Nada encontrado.</div>`;
    searchResultsEl.classList.remove("hidden");
  });

  socket.on("dm-history", ({ withUsername, messages }) => { if (currentDmUser === withUsername) renderDmHistory(messages); });
  socket.on("dm-message", (msg) => {
    if (currentDmUser && (msg.from === currentDmUser || msg.to === currentDmUser)) appendDmMessage(msg);
    if (msg.from !== username && msg.from !== currentDmUser) {
      notify(`${msg.from} (mensagem direta)`, msg.text);
      unreadDms.add(msg.from);
      renderDmList(lastOnlineUsers);
    }
  });
  socket.on("dm-message-updated", (msg) => { if (currentDmUser === msg.from || currentDmUser === msg.to) updateDmMessage(msg); });
  socket.on("dm-message-deleted", ({ messageId }) => { const el = messagesEl.querySelector(`.msg[data-id="${messageId}"]`); if (el) el.remove(); });

  socket.on("screen-share-status", ({ active }) => { if (active) screenBanner.classList.remove("hidden"); });
  socket.on("screen-share-started", ({ sharerId, username: sharerName }) => {
    activeSharerId = sharerId;
    screenBanner.textContent = `${sharerName} está compartilhando a tela`;
    screenBanner.classList.remove("hidden");
    if (sharerId !== socket.id) startWatchingScreen(sharerId);
  });
  socket.on("screen-share-stopped", ({ sharerId }) => {
    if (sharerId === activeSharerId) {
      activeSharerId = null;
      screenBanner.classList.add("hidden");
      remoteVideoWrap.classList.add("hidden");
      remoteVideo.srcObject = null;
      if (receivingScreenConnection) { receivingScreenConnection.close(); receivingScreenConnection = null; }
    }
  });
  socket.on("viewer-joined", async ({ viewerId }) => {
    if (!isSharing || !localScreenStream) return;
    const pc = new RTCPeerConnection(RTC_CONFIG);
    screenPeerConnections.set(viewerId, pc);
    localScreenStream.getTracks().forEach((t) => pc.addTrack(t, localScreenStream));
    pc.onicecandidate = (e) => e.candidate && sendSignal(viewerId, { kind: "screen-ice", candidate: e.candidate });
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    sendSignal(viewerId, { kind: "screen-offer", offer });
  });

  socket.on("voice-members", ({ channelId, members }) => renderVoiceMembers(channelId, members));
  socket.on("voice-peer-joined", async ({ channelId, peerId, username: peerUsername }) => {
    voicePeerNames.set(peerId, peerUsername);
    if (inVoiceChannel !== channelId || !localVoiceStream) return;
    const pc = createVoicePeer(peerId);
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    sendSignal(peerId, { kind: "voice-offer", offer });
  });
  socket.on("voice-peer-left", ({ peerId }) => {
    const pc = voicePeerConnections.get(peerId);
    if (pc) { pc.close(); voicePeerConnections.delete(peerId); }
    const audioEl = voiceAudioEls.get(peerId);
    if (audioEl) { audioEl.remove(); voiceAudioEls.delete(peerId); }
    const videoTile = voiceVideoEls.get(peerId);
    if (videoTile) { videoTile.remove(); voiceVideoEls.delete(peerId); }
    if (!voiceVideoEls.size) videoGrid.classList.add("hidden");
    voicePeerNames.delete(peerId);
  });

  socket.on("rtc-signal", async ({ fromId, data }) => {
    if (data.kind === "screen-offer") {
      const pc = new RTCPeerConnection(RTC_CONFIG);
      receivingScreenConnection = pc;
      pc.onicecandidate = (e) => e.candidate && sendSignal(fromId, { kind: "screen-ice", candidate: e.candidate });
      pc.ontrack = (e) => { remoteVideo.srcObject = e.streams[0]; remoteVideoWrap.classList.remove("hidden"); };
      await pc.setRemoteDescription(data.offer);
      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);
      sendSignal(fromId, { kind: "screen-answer", answer });
    } else if (data.kind === "screen-answer") {
      const pc = screenPeerConnections.get(fromId);
      if (pc) await pc.setRemoteDescription(data.answer);
    } else if (data.kind === "screen-ice") {
      const pc = screenPeerConnections.get(fromId) || receivingScreenConnection;
      if (pc) { try { await pc.addIceCandidate(data.candidate); } catch (_) {} }
    } else if (data.kind === "voice-offer") {
      const pc = voicePeerConnections.get(fromId) || createVoicePeer(fromId);
      await pc.setRemoteDescription(data.offer);
      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);
      sendSignal(fromId, { kind: "voice-answer", answer });
    } else if (data.kind === "voice-answer") {
      const pc = voicePeerConnections.get(fromId);
      if (pc) await pc.setRemoteDescription(data.answer);
    } else if (data.kind === "voice-ice") {
      const pc = voicePeerConnections.get(fromId);
      if (pc) { try { await pc.addIceCandidate(data.candidate); } catch (_) {} }
    } else if (data.kind === "video-off") {
      const tile = voiceVideoEls.get(fromId);
      if (tile) { tile.remove(); voiceVideoEls.delete(fromId); }
      if (!voiceVideoEls.size) videoGrid.classList.add("hidden");
    }
  });
}

function sendSignal(targetId, data) { socket.emit("rtc-signal", { targetId, data }); }

// ---------- Aplica os ícones SVG nos botões estáticos ----------
function applyStaticIcons() {
  const map = {
    "pinned-btn": ICONS.pin, "inbox-btn": ICONS.inbox, "help-btn": ICONS.help, "attach-btn": ICONS.attach,
    "emoji-btn": ICONS.smile, "settings-btn": ICONS.settings, "update-btn": ICONS.update,
    "add-text-channel": ICONS.plus, "add-voice-channel": ICONS.plus,
    "add-server-btn": ICONS.plus, "mute-btn": ICONS.mic, "deafen-btn": ICONS.headphones,
    "leave-voice-btn": ICONS.phoneOff, "camera-btn": ICONS.camera, "attachment-remove": ICONS.x, "reply-cancel": ICONS.x,
    "fullscreen-btn": ICONS.maximize, "add-server-close-x": ICONS.x, "server-settings-close": ICONS.x, "settings-close": ICONS.x,
    "edit-profile-close": ICONS.x, "view-profile-close": ICONS.x,
  };
  Object.entries(map).forEach(([id, svg]) => { const el = document.getElementById(id); if (el) el.innerHTML = svg; });
  const searchIcon = document.querySelector(".header-search-icon");
  if (searchIcon) searchIcon.innerHTML = ICONS.search;
  const share = document.getElementById("share-btn");
  if (share) share.innerHTML = ICONS.monitor;
  const friendsBtn = document.getElementById("friends-rail-btn");
  if (friendsBtn) friendsBtn.innerHTML = ICONS.friends;
  const chevrons = document.querySelectorAll(".server-chevron");
  chevrons.forEach((c) => (c.innerHTML = ICONS.chevron));
  const menuIcons = { "menu-my-server-profile": ICONS.pencil, "menu-invite": ICONS.mail, "menu-create-channel": ICONS.channelPlus, "menu-create-category": ICONS.folderPlus, "menu-change-icon": ICONS.image, "menu-leave-server": ICONS.logout };
  Object.entries(menuIcons).forEach(([id, svg]) => { const el = document.querySelector(`#${id} span`); if (el) el.innerHTML = svg; });
  document.querySelectorAll(".friends-home-icon").forEach((el) => { el.innerHTML = ICONS.friends; });
}
applyStaticIcons();

function renderMyAvatar() {
  myAvatarEl.innerHTML = myAvatar
    ? `<img class="avatar-img" style="width:100%;height:100%" src="${myAvatar}" />`
    : escapeHtml(username[0].toUpperCase());
  myAvatarEl.style.background = myAvatar ? "transparent" : colorForUsername(username);
}
function updateMyStatusDot() { myStatusDot.className = "status-dot status-" + myStatus; }

// ---------- Autocompletar @menção e :emoji: ----------
let autocompleteMatches = [];
let autocompleteType = null; // 'mention' | 'emoji'
let autocompleteIndex = 0;

messageInput.addEventListener("keyup", (e) => {
  if (["ArrowUp", "ArrowDown", "Enter", "Tab", "Escape"].includes(e.key)) return;
  updateAutocomplete();
});
messageInput.addEventListener("keydown", (e) => {
  if (autocompleteList.classList.contains("hidden")) return;
  if (e.key === "ArrowDown") { e.preventDefault(); autocompleteIndex = (autocompleteIndex + 1) % autocompleteMatches.length; renderAutocompleteList(); }
  else if (e.key === "ArrowUp") { e.preventDefault(); autocompleteIndex = (autocompleteIndex - 1 + autocompleteMatches.length) % autocompleteMatches.length; renderAutocompleteList(); }
  else if (e.key === "Enter" || e.key === "Tab") { if (autocompleteMatches.length) { e.preventDefault(); applyAutocomplete(autocompleteMatches[autocompleteIndex]); } }
  else if (e.key === "Escape") { closeAutocomplete(); }
});

function updateAutocomplete() {
  const value = messageInput.value;
  const cursor = messageInput.selectionStart;
  const uptoCursor = value.slice(0, cursor);
  const mentionMatch = uptoCursor.match(/@(\w*)$/);
  const emojiMatch = uptoCursor.match(/:(\w{2,})$/);

  if (mentionMatch) {
    const q = mentionMatch[1].toLowerCase();
    autocompleteMatches = lastMemberList.map((u) => u.username).filter((n) => n.toLowerCase().startsWith(q)).slice(0, 6);
    autocompleteType = "mention";
  } else if (emojiMatch) {
    const q = emojiMatch[1].toLowerCase();
    autocompleteMatches = customEmojis.map((e) => e.name).filter((n) => n.startsWith(q)).slice(0, 6);
    autocompleteType = "emoji";
  } else {
    autocompleteMatches = [];
  }
  autocompleteIndex = 0;
  if (autocompleteMatches.length) { renderAutocompleteList(); autocompleteList.classList.remove("hidden"); }
  else closeAutocomplete();
}
function renderAutocompleteList() {
  autocompleteList.innerHTML = autocompleteMatches.map((m, i) => {
    if (autocompleteType === "emoji") {
      const em = customEmojis.find((e) => e.name === m);
      return `<div class="autocomplete-item${i === autocompleteIndex ? " active" : ""}" data-value="${m}"><img class="custom-emoji" src="${em.image}" /> :${m}:</div>`;
    }
    return `<div class="autocomplete-item${i === autocompleteIndex ? " active" : ""}" data-value="${m}">${avatarHtml(m, null, 18)} ${escapeHtml(m)}</div>`;
  }).join("");
}
function applyAutocomplete(value) {
  const cursor = messageInput.selectionStart;
  const before = messageInput.value.slice(0, cursor);
  const after = messageInput.value.slice(cursor);
  const replaced = autocompleteType === "mention"
    ? before.replace(/@(\w*)$/, `@${value} `)
    : before.replace(/:(\w*)$/, `:${value}: `);
  messageInput.value = replaced + after;
  messageInput.focus();
  closeAutocomplete();
}
function closeAutocomplete() { autocompleteMatches = []; autocompleteList.classList.add("hidden"); }
autocompleteList.addEventListener("mousedown", (e) => {
  const item = e.target.closest(".autocomplete-item");
  if (item) { e.preventDefault(); applyAutocomplete(item.dataset.value); }
});

// ---------- "Digitando..." ----------
messageInput.addEventListener("input", () => {
  if (!socket || currentDmUser) return;
  socket.emit("typing");
});
function showTyping(who) {
  if (who === username) return;
  if (typingUsers.has(who)) clearTimeout(typingUsers.get(who));
  typingUsers.set(who, setTimeout(() => clearTyping(who), 3000));
  renderTypingLine();
}
function clearTyping(who) {
  if (typingUsers.has(who)) { clearTimeout(typingUsers.get(who)); typingUsers.delete(who); }
  renderTypingLine();
}
function renderTypingLine() {
  const names = [...typingUsers.keys()];
  if (!names.length) { typingIndicatorEl.classList.add("hidden"); return; }
  const text = names.length === 1 ? `${names[0]} está digitando...` : `${names.join(", ")} estão digitando...`;
  typingIndicatorEl.textContent = text;
  typingIndicatorEl.classList.remove("hidden");
}

// ---------- Configurações ----------
const settingsUsernameDisplay = document.getElementById("settings-username-display");
const settingsEmailDisplay = document.getElementById("settings-email-display");
const settingsNewEmailInput = document.getElementById("settings-new-email-input");
const settingsEmailPasswordInput = document.getElementById("settings-email-password-input");
const settingsEmailSave = document.getElementById("settings-email-save");
const settingsEmailMsg = document.getElementById("settings-email-msg");
const settingsCurrentPasswordInput = document.getElementById("settings-current-password-input");
const settingsNewPasswordInput = document.getElementById("settings-new-password-input");
const settingsPasswordSave = document.getElementById("settings-password-save");
const settingsPasswordMsg = document.getElementById("settings-password-msg");
const settingsClose = document.getElementById("settings-close");

settingsBtn.addEventListener("click", async () => {
  const config = await window.electronAPI.getConfig();
  settingsServerInput.value = config.serverUrl;
  settingsStatusSelect.value = myStatus;
  settingsNotificationsCheckbox.checked = notificationsEnabled;
  settingsUsernameDisplay.value = username;
  settingsEmailDisplay.value = "Carregando...";
  settingsNewEmailInput.value = "";
  settingsEmailPasswordInput.value = "";
  settingsCurrentPasswordInput.value = "";
  settingsNewPasswordInput.value = "";
  settingsEmailMsg.textContent = "";
  settingsPasswordMsg.textContent = "";
  document.querySelectorAll(".account-nav-tab").forEach((t) => t.classList.remove("active"));
  document.querySelector('.account-nav-tab[data-tab="account"]').classList.add("active");
  document.querySelectorAll("#account-tab-account, #account-tab-notifications, #account-tab-advanced").forEach((t) => t.classList.add("hidden"));
  document.getElementById("account-tab-account").classList.remove("hidden");
  socket.emit("get-account-info");
  settingsOverlay.classList.remove("hidden");
});
settingsClose.addEventListener("click", () => settingsOverlay.classList.add("hidden"));
document.querySelectorAll(".account-nav-tab[data-tab]").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".account-nav-tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    document.querySelectorAll("#account-tab-account, #account-tab-notifications, #account-tab-advanced").forEach((t) => t.classList.add("hidden"));
    document.getElementById(`account-tab-${tab.dataset.tab}`).classList.remove("hidden");
  });
});

settingsStatusSelect.addEventListener("change", () => {
  myStatus = settingsStatusSelect.value;
  socket.emit("set-status", { status: myStatus });
  updateMyStatusDot();
});
settingsNotificationsCheckbox.addEventListener("change", async () => {
  notificationsEnabled = settingsNotificationsCheckbox.checked;
  await window.electronAPI.setConfig({ notificationsEnabled });
});

settingsEmailSave.addEventListener("click", () => {
  settingsEmailMsg.textContent = "";
  socket.emit("change-email", { password: settingsEmailPasswordInput.value, newEmail: settingsNewEmailInput.value.trim() });
});
settingsPasswordSave.addEventListener("click", () => {
  settingsPasswordMsg.textContent = "";
  const newPass = settingsNewPasswordInput.value;
  if (newPass.length < 4) { settingsPasswordMsg.textContent = "A nova senha precisa ter pelo menos 4 caracteres."; return; }
  socket.emit("change-password", { currentPassword: settingsCurrentPasswordInput.value, newPassword: newPass });
});

settingsSave.addEventListener("click", async () => {
  const url = settingsServerInput.value.trim();
  if (!url) return;
  await window.electronAPI.setConfig({ serverUrl: url });
  settingsOverlay.classList.add("hidden");
  window.location.reload();
});
settingsLogout.addEventListener("click", async () => {
  const config = await window.electronAPI.getConfig();
  if (socket && config.sessionToken) socket.emit("logout", { token: config.sessionToken });
  await window.electronAPI.setConfig({ sessionToken: "", avatarDataUrl: "" });
  window.location.reload();
});

// ---------- Servidores (comunidades) ----------
function renderServerIcons() {
  serverIconsEl.innerHTML = "";
  myServers.forEach((srv) => {
    const div = document.createElement("div");
    div.className = "server-icon" + (srv.id === currentServerId ? " active" : "");
    div.innerHTML = srv.icon ? `<img src="${srv.icon}" />` : escapeHtml(srv.name[0].toUpperCase());
    div.title = srv.name;
    div.addEventListener("click", () => selectServer(srv.id));
    serverIconsEl.appendChild(div);
  });
}
function editServerIcon(serverId) {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = async () => {
    const file = input.files[0];
    if (!file) return;
    const icon = await readAndResizeImage(file, 96);
    socket.emit("update-server-icon", { serverId, icon });
  };
  input.click();
}
function selectServer(serverId) {
  hideFriendsHome();
  currentServerId = serverId;
  currentChannel = null;
  currentDmUser = null;
  channels = [];
  categories = [];
  const srv = myServers.find((s) => s.id === serverId);
  currentServerNameEl.textContent = srv ? srv.name : "QG";
  messagesEl.innerHTML = "";
  renderServerIcons();
  socket.emit("select-server", { serverId });
}

const addServerStepMain = document.getElementById("add-server-step-main");
const addServerStepCreate = document.getElementById("add-server-step-create");
const addServerStepJoin = document.getElementById("add-server-step-join");

function showAddServerStep(step) {
  [addServerStepMain, addServerStepCreate, addServerStepJoin].forEach((el) => el.classList.add("hidden"));
  step.classList.remove("hidden");
}

addServerBtn.addEventListener("click", () => {
  newServerNameInput.value = "";
  joinServerCodeInput.value = "";
  joinServerError.textContent = "";
  showAddServerStep(addServerStepMain);
  addServerOverlay.classList.remove("hidden");
});
document.getElementById("add-server-close-x").addEventListener("click", () => addServerOverlay.classList.add("hidden"));
document.getElementById("show-create-server-form").addEventListener("click", () => showAddServerStep(addServerStepCreate));
document.getElementById("show-join-server-form").addEventListener("click", () => showAddServerStep(addServerStepJoin));
document.getElementById("create-server-back").addEventListener("click", () => showAddServerStep(addServerStepMain));
document.getElementById("join-server-back").addEventListener("click", () => showAddServerStep(addServerStepMain));

createServerConfirm.addEventListener("click", () => {
  const name = newServerNameInput.value.trim();
  if (!name) return;
  socket.emit("create-server", { name });
  addServerOverlay.classList.add("hidden");
});
joinServerConfirm.addEventListener("click", () => {
  const code = joinServerCodeInput.value.trim();
  if (!code) return;
  socket.emit("join-server-by-code", { code });
  addServerOverlay.classList.add("hidden");
});

inviteClose.addEventListener("click", () => inviteOverlay.classList.add("hidden"));

// ---------- Menu dropdown do servidor ----------
const serverNameBtn = document.getElementById("server-name-btn");
const serverDropdown = document.getElementById("server-dropdown");
serverNameBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  serverDropdown.classList.toggle("hidden");
});
document.addEventListener("click", (e) => { if (!e.target.closest(".channel-list-header")) serverDropdown.classList.add("hidden"); });

// ---------- Apelido e foto por servidor (diferente do perfil global) ----------
const serverProfileOverlay = document.getElementById("server-profile-overlay");
const serverProfileAvatarPreview = document.getElementById("server-profile-avatar-preview");
const serverProfileAvatarBtn = document.getElementById("server-profile-avatar-btn");
const serverProfileAvatarInput = document.getElementById("server-profile-avatar-input");
const serverProfileAvatarReset = document.getElementById("server-profile-avatar-reset");
const serverProfileNicknameInput = document.getElementById("server-profile-nickname-input");
const serverProfileCancel = document.getElementById("server-profile-cancel");
const serverProfileSave = document.getElementById("server-profile-save");
let serverProfileAvatarChanged = false;
let serverProfileAvatarValue = null;

function renderServerProfileAvatarPreview() {
  const avatar = serverProfileAvatarChanged ? serverProfileAvatarValue : (lastMemberList.find((m) => m.username === username)?.avatar || myAvatar);
  serverProfileAvatarPreview.innerHTML = avatar ? `<img src="${avatar}" />` : escapeHtml(username[0]?.toUpperCase() || "?");
}

document.getElementById("menu-my-server-profile").addEventListener("click", () => {
  serverDropdown.classList.add("hidden");
  const me = lastMemberList.find((m) => m.username === username);
  serverProfileNicknameInput.value = (me && me.nickname) || "";
  serverProfileAvatarChanged = false;
  serverProfileAvatarValue = null;
  renderServerProfileAvatarPreview();
  serverProfileOverlay.classList.remove("hidden");
});
serverProfileCancel.addEventListener("click", () => serverProfileOverlay.classList.add("hidden"));
serverProfileAvatarBtn.addEventListener("click", () => serverProfileAvatarInput.click());
serverProfileAvatarInput.addEventListener("change", async () => {
  const file = serverProfileAvatarInput.files[0];
  if (!file) return;
  serverProfileAvatarValue = await readAndResizeImage(file);
  serverProfileAvatarChanged = true;
  renderServerProfileAvatarPreview();
});
serverProfileAvatarReset.addEventListener("click", () => {
  serverProfileAvatarChanged = true;
  serverProfileAvatarValue = null;
  renderServerProfileAvatarPreview();
});
serverProfileSave.addEventListener("click", () => {
  socket.emit("update-server-profile", {
    serverId: currentServerId,
    nickname: serverProfileNicknameInput.value.trim(),
    avatarChanged: serverProfileAvatarChanged,
    avatar: serverProfileAvatarValue,
  });
  serverProfileOverlay.classList.add("hidden");
});

document.getElementById("menu-invite").addEventListener("click", () => {
  const srv = myServers.find((s) => s.id === currentServerId);
  if (!srv || !srv.inviteCode) return;
  inviteCodeDisplay.value = srv.inviteCode;
  inviteOverlay.classList.remove("hidden");
  serverDropdown.classList.add("hidden");
});
document.getElementById("menu-create-channel").addEventListener("click", () => { openCreateChannelModal("text"); serverDropdown.classList.add("hidden"); });
document.getElementById("menu-create-category").addEventListener("click", () => {
  const name = prompt("Nome da nova categoria:");
  if (name && name.trim()) socket.emit("create-category", { name: name.trim(), serverId: currentServerId });
  serverDropdown.classList.add("hidden");
});
document.getElementById("menu-change-icon").addEventListener("click", () => { editServerIcon(currentServerId); serverDropdown.classList.add("hidden"); });
document.getElementById("menu-server-settings").addEventListener("click", () => { openServerSettings(); serverDropdown.classList.add("hidden"); });
document.getElementById("menu-leave-server").addEventListener("click", () => {
  if (confirm("Tem certeza que quer sair desse servidor?")) socket.emit("leave-server", { serverId: currentServerId });
  serverDropdown.classList.add("hidden");
});

function updateServerMenuVisibility() {
  const isOwner = myRole === "owner";
  document.getElementById("menu-invite").classList.toggle("hidden", !isOwner);
  document.getElementById("menu-create-channel").classList.toggle("hidden", !isOwner);
  document.getElementById("menu-create-category").classList.toggle("hidden", !isOwner);
  document.getElementById("menu-change-icon").classList.toggle("hidden", !isOwner);
  document.getElementById("menu-leave-server").classList.toggle("hidden", isOwner || currentServerId === "default-server");
  document.getElementById("menu-server-settings").classList.toggle("hidden", !isOwner);
}

// ---------- Página de Configurações do Servidor ----------
const serverSettingsOverlay = document.getElementById("server-settings-overlay");
const serverSettingsTitle = document.getElementById("server-settings-title");
const serverRenameInput = document.getElementById("server-rename-input");
const serverMembersSettingsList = document.getElementById("server-members-settings-list");
const serverBansSettingsList = document.getElementById("server-bans-settings-list");
const serverInviteCodeDisplay = document.getElementById("server-invite-code-display");

function openServerSettings() {
  const srv = myServers.find((s) => s.id === currentServerId);
  serverSettingsTitle.textContent = srv ? srv.name : "Servidor";
  serverRenameInput.value = srv ? srv.name : "";
  serverInviteCodeDisplay.value = srv?.inviteCode || "";
  document.querySelectorAll(".server-settings-nav-item").forEach((t) => t.classList.remove("active"));
  document.querySelector('.server-settings-nav-item[data-tab="overview"]').classList.add("active");
  document.querySelectorAll(".server-settings-tab").forEach((t) => t.classList.add("hidden"));
  document.getElementById("settings-tab-overview").classList.remove("hidden");
  socket.emit("get-server-members", { serverId: currentServerId });
  socket.emit("get-server-bans", { serverId: currentServerId });
  serverSettingsOverlay.classList.remove("hidden");
}
document.getElementById("server-settings-close").addEventListener("click", () => serverSettingsOverlay.classList.add("hidden"));
document.querySelectorAll(".server-settings-nav-item[data-tab]").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".server-settings-nav-item").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    document.querySelectorAll(".server-settings-tab").forEach((t) => t.classList.add("hidden"));
    document.getElementById(`settings-tab-${tab.dataset.tab}`).classList.remove("hidden");
  });
});

document.getElementById("server-rename-save").addEventListener("click", () => {
  const name = serverRenameInput.value.trim();
  if (!name) return;
  socket.emit("rename-server", { serverId: currentServerId, name });
});
document.getElementById("server-invite-regenerate").addEventListener("click", () => {
  if (confirm("Isso invalida o código de convite antigo. Continuar?")) socket.emit("regenerate-invite", { serverId: currentServerId });
});
document.getElementById("server-delete-confirm").addEventListener("click", () => {
  const srv = myServers.find((s) => s.id === currentServerId);
  if (confirm(`Tem certeza que quer excluir "${srv?.name}"? Essa ação NÃO pode ser desfeita.`)) {
    socket.emit("delete-server", { serverId: currentServerId });
    serverSettingsOverlay.classList.add("hidden");
  }
});

function renderServerMembersSettings(members) {
  serverMembersSettingsList.innerHTML = members.map((m) => `
    <div class="friend-row" data-username="${escapeHtml(m.username)}">
      ${avatarHtml(m.username, m.avatar, 32)}
      <span class="friend-name">${escapeHtml(m.nickname || m.username)}${m.nickname ? ` <small style="color:var(--text-muted)">(@${escapeHtml(m.username)})</small>` : ""} <small style="color:var(--text-muted)">${m.role === "owner" ? "Dono" : m.role === "moderator" ? "Moderador" : "Membro"}</small></span>
      ${m.role !== "owner" ? `<button class="ghost-btn settings-kick-btn">Remover</button><button class="ghost-btn danger settings-ban-btn">Banir</button>` : ""}
    </div>`).join("");
  serverMembersSettingsList.querySelectorAll(".settings-kick-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const uname = e.target.closest(".friend-row").dataset.username;
      if (confirm(`Remover ${uname} desse servidor?`)) socket.emit("kick-member", { serverId: currentServerId, targetUsername: uname });
    });
  });
  serverMembersSettingsList.querySelectorAll(".settings-ban-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const uname = e.target.closest(".friend-row").dataset.username;
      if (confirm(`Banir ${uname} desse servidor? A pessoa não vai conseguir voltar nem com um convite novo, até você desbanir.`)) {
        socket.emit("ban-member", { serverId: currentServerId, targetUsername: uname });
      }
    });
  });
}

function renderServerBansSettings(bans) {
  serverBansSettingsList.innerHTML = bans.length
    ? bans.map((b) => `
      <div class="friend-row" data-username="${escapeHtml(b.username)}">
        ${avatarHtml(b.username, null, 32)}
        <span class="friend-name">${escapeHtml(b.username)}</span>
        <button class="ghost-btn settings-unban-btn">Desbanir</button>
      </div>`).join("")
    : `<div class="friend-row" style="opacity:0.6;">Ninguém banido por aqui.</div>`;
  serverBansSettingsList.querySelectorAll(".settings-unban-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const uname = e.target.closest(".friend-row").dataset.username;
      socket.emit("unban-member", { serverId: currentServerId, targetUsername: uname });
    });
  });
}

// ---------- Categorias ----------
function populateCategorySelect() {
  createChannelCategorySelect.innerHTML = `<option value="">Sem categoria</option>` +
    categories.map((c) => `<option value="${c.id}">${escapeHtml(c.name)}</option>`).join("");
}

// ---------- Canais: listar, criar, apagar ----------
function updateRoleUI() {
  const isOwner = myRole === "owner";
  addTextChannelBtn.classList.toggle("hidden", !isOwner);
  addVoiceChannelBtn.classList.toggle("hidden", !isOwner);
  updateServerMenuVisibility();
  renderChannelLists();
  renderMemberList(lastMemberList);
}

function renderChannelLists() {
  const isOwner = myRole === "owner";
  const deleteBtnHtml = isOwner ? `<span class="channel-delete" data-tooltip="Apagar canal">${ICONS.x}</span>` : "";
  const slowModeBtnHtml = isOwner ? `<span class="channel-slowmode" data-tooltip="Modo lento">${ICONS.clock}</span>` : "";

  textChannelsEl.innerHTML = "";
  voiceChannelsEl.innerHTML = "";

  const textChs = channels.filter((c) => c.type === "text");
  const uncategorized = textChs.filter((c) => !c.category_id);
  uncategorized.forEach((ch) => appendChannelLi(textChannelsEl, ch, deleteBtnHtml, ch.is_private ? ICONS.lock : ICONS.hash, () => joinChannel(ch.id), false, slowModeBtnHtml));

  categories.forEach((cat) => {
    const inCat = textChs.filter((c) => c.category_id === cat.id);
    if (!inCat.length) return;
    const isCollapsed = collapsedCategories.has(cat.id);
    const header = document.createElement("li");
    header.className = "category-header" + (isCollapsed ? " collapsed" : "");
    header.innerHTML = `<span class="category-chevron">${ICONS.chevron}</span><span>${escapeHtml(cat.name)}</span>`;
    header.addEventListener("click", () => {
      if (collapsedCategories.has(cat.id)) collapsedCategories.delete(cat.id);
      else collapsedCategories.add(cat.id);
      renderChannelLists();
    });
    textChannelsEl.appendChild(header);
    if (!isCollapsed) inCat.forEach((ch) => appendChannelLi(textChannelsEl, ch, deleteBtnHtml, ch.is_private ? ICONS.lock : ICONS.hash, () => joinChannel(ch.id), false, slowModeBtnHtml));
  });

  channels.filter((c) => c.type === "voice").forEach((ch) => appendChannelLi(voiceChannelsEl, ch, deleteBtnHtml, ICONS.volume, () => joinVoiceChannel(ch.id), true));
}

function appendChannelLi(container, ch, deleteBtnHtml, icon, onClick, isVoice, slowModeBtnHtml) {
  const li = document.createElement("li");
  const activeClass = isVoice ? (inVoiceChannel === ch.id ? " active" : "") : (ch.id === currentChannel && !currentDmUser ? " active" : "");
  li.className = "channel-item" + (isVoice ? " voice-item" : "") + activeClass;
  const unreadDot = !isVoice && unreadChannels.has(ch.id) ? `<span class="unread-dot"></span>` : "";
  const slowIndicator = !isVoice && ch.slow_mode_seconds > 0 ? `<span class="channel-hash" data-tooltip="Modo lento: ${ch.slow_mode_seconds}s">${ICONS.clock}</span>` : "";
  li.innerHTML = `<span class="channel-hash">${icon}</span><span class="channel-name">${escapeHtml(ch.name)}</span>${unreadDot}${slowIndicator}${slowModeBtnHtml || ""}${deleteBtnHtml}`;
  li.querySelector(".channel-name").addEventListener("click", onClick);
  li.querySelectorAll(".channel-hash")[0].addEventListener("click", onClick);
  const delBtn = li.querySelector(".channel-delete");
  if (delBtn) delBtn.addEventListener("click", (e) => { e.stopPropagation(); if (confirm(`Apagar o canal ${ch.name}?`)) socket.emit("delete-channel", { id: ch.id, serverId: currentServerId }); });
  const slowBtn = li.querySelector(".channel-slowmode");
  if (slowBtn) {
    slowBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const input = prompt(`Modo lento para #${ch.name} (segundos entre mensagens de cada pessoa, 0 desativa):`, String(ch.slow_mode_seconds || 0));
      if (input === null) return;
      const seconds = Math.max(0, Math.min(21600, parseInt(input, 10) || 0));
      socket.emit("set-channel-slow-mode", { id: ch.id, serverId: currentServerId, slowModeSeconds: seconds });
    });
  }
  container.appendChild(li);
}

addTextChannelBtn.addEventListener("click", () => openCreateChannelModal("text"));
addVoiceChannelBtn.addEventListener("click", () => openCreateChannelModal("voice"));
function openCreateChannelModal(type) {
  pendingChannelType = type;
  createChannelTitle.textContent = type === "voice" ? "Criar canal de voz" : "Criar canal de texto";
  createChannelInput.value = "";
  createChannelCategoryLabel.classList.toggle("hidden", type === "voice");
  createChannelCategorySelect.classList.toggle("hidden", type === "voice");
  createChannelSlowmodeLabel.classList.toggle("hidden", type === "voice");
  createChannelSlowmodeInput.classList.toggle("hidden", type === "voice");
  createChannelSlowmodeInput.value = "0";
  createChannelOverlay.classList.remove("hidden");
  createChannelInput.focus();
}
createChannelCancel.addEventListener("click", () => createChannelOverlay.classList.add("hidden"));
createChannelPrivate.addEventListener("change", () => createChannelInviteWrap.classList.toggle("hidden", !createChannelPrivate.checked));
createChannelConfirm.addEventListener("click", () => {
  const name = createChannelInput.value.trim();
  if (!name) return;
  const isPrivate = createChannelPrivate.checked;
  const inviteUsernames = isPrivate
    ? createChannelInviteInput.value.split(",").map((s) => s.trim()).filter(Boolean)
    : [];
  const slowModeSeconds = pendingChannelType === "voice" ? 0 : parseInt(createChannelSlowmodeInput.value, 10) || 0;
  socket.emit("create-channel", { name, type: pendingChannelType, serverId: currentServerId, categoryId: createChannelCategorySelect.value || null, isPrivate, inviteUsernames, slowModeSeconds });
  createChannelOverlay.classList.add("hidden");
  createChannelPrivate.checked = false;
  createChannelInviteWrap.classList.add("hidden");
});
createChannelInput.addEventListener("keydown", (e) => e.key === "Enter" && createChannelConfirm.click());

function joinChannel(channel) {
  currentDmUser = null;
  currentChannel = channel;
  unreadChannels.delete(channel);
  replyTarget = null;
  hideReplyPreview();
  hideSlowModeBanner();
  const ch = channels.find((c) => c.id === channel);
  currentChannelName.textContent = "#" + (ch ? ch.name : channel);
  messagesEl.innerHTML = "";
  screenBanner.classList.add("hidden");
  remoteVideoWrap.classList.add("hidden");
  activeSharerId = null;
  messageInput.placeholder = "Enviar mensagem...";
  searchInput.value = "";
  searchResultsEl.classList.add("hidden");
  renderChannelLists();
  socket.emit("join-channel", { channel, serverId: currentServerId });
}

// ---------- Busca ----------
searchInput.addEventListener("focus", () => { if (searchInput.value.trim() && currentChannel) socket.emit("search-messages", { channelId: currentChannel, query: searchInput.value }); });
document.addEventListener("click", (e) => { if (!e.target.closest(".header-search") && !e.target.closest("#search-results")) searchResultsEl.classList.add("hidden"); });
let searchDebounce = null;
searchInput.addEventListener("input", () => {
  clearTimeout(searchDebounce);
  if (!searchInput.value.trim()) { searchResultsEl.classList.add("hidden"); return; }
  searchDebounce = setTimeout(() => { if (currentChannel) socket.emit("search-messages", { channelId: currentChannel, query: searchInput.value }); }, 300);
});

// ---------- Mensagens fixadas ----------
pinnedBtn.addEventListener("click", () => {
  if (!currentChannel) return;
  socket.emit("get-pinned", { channelId: currentChannel });
  pinnedOverlay.classList.remove("hidden");
});
pinnedClose.addEventListener("click", () => pinnedOverlay.classList.add("hidden"));

// ---------- Chat de texto ----------
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = messageInput.value;
  if (!text.trim() && !pendingAttachment) return;
  if (currentDmUser) {
    socket.emit("dm-message", { toUsername: currentDmUser, text });
  } else {
    const slowMode = currentChannelSlowMode();
    if (slowMode > 0) {
      const waitMs = slowMode * 1000 - (Date.now() - (lastSentAtByChannel.get(currentChannel) || 0));
      if (waitMs > 0) { showSlowModeBanner(waitMs); return; }
      lastSentAtByChannel.set(currentChannel, Date.now());
    }
    socket.emit("chat-message", { text, attachment: pendingAttachment, replyToId: replyTarget ? replyTarget.id : null });
  }
  messageInput.value = "";
  clearAttachment();
  replyTarget = null;
  hideReplyPreview();
});

function renderHistory(history) {
  messagesEl.innerHTML = "";
  lastMsgAuthor = null; lastMsgTime = 0;
  if (!history.length) {
    const ch = channels.find((c) => c.id === currentChannel);
    const srv = myServers.find((s) => s.id === currentServerId);
    const checklistHtml = myRole === "owner" ? `
      <div class="welcome-checklist">
        <button class="welcome-check-item" id="welcome-invite">
          <span class="welcome-check-icon">${ICONS.userPlus}</span>
          <span>Convide seus amigos</span>
          <span class="welcome-check-arrow">›</span>
        </button>
        <button class="welcome-check-item" id="welcome-icon">
          <span class="welcome-check-icon">${ICONS.image}</span>
          <span>Personalize seu servidor com um ícone</span>
          <span class="welcome-check-arrow">›</span>
        </button>
        <button class="welcome-check-item" id="welcome-message">
          <span class="welcome-check-icon">${ICONS.mail}</span>
          <span>Envie sua primeira mensagem</span>
          <span class="welcome-check-arrow">›</span>
        </button>
      </div>` : "";
    messagesEl.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">${ICONS.hash}</div>
        <h2>Bem-vindo a #${escapeHtml(ch ? ch.name : "")}</h2>
        <p>Esse é o começo da conversa nesse canal. Manda a primeira mensagem!</p>
        ${checklistHtml}
      </div>`;
    if (myRole === "owner") {
      document.getElementById("welcome-invite")?.addEventListener("click", () => document.getElementById("menu-invite").click());
      document.getElementById("welcome-icon")?.addEventListener("click", () => editServerIcon(currentServerId));
      document.getElementById("welcome-message")?.addEventListener("click", () => messageInput.focus());
    }
    return;
  }
  history.forEach(appendMessage);
}

let lastMsgAuthor = null;
let lastMsgTime = 0;
const GROUP_WINDOW_MS = 5 * 60 * 1000; // 5 minutos

function linkEmbedHtml(embed) {
  if (!embed) return "";
  return `
    <a class="msg-embed" href="${embed.url}" target="_blank" rel="noopener">
      ${embed.image ? `<img class="msg-embed-image" src="${embed.image}" />` : ""}
      <div class="msg-embed-body">
        ${embed.siteName ? `<div class="msg-embed-site">${escapeHtml(embed.siteName)}</div>` : ""}
        ${embed.title ? `<div class="msg-embed-title">${escapeHtml(embed.title)}</div>` : ""}
        ${embed.description ? `<div class="msg-embed-desc">${escapeHtml(embed.description)}</div>` : ""}
      </div>
    </a>`;
}

function resolveDisplay(rawUsername, rawAvatar, isDm) {
  if (isDm) return { name: rawUsername, avatar: rawAvatar };
  const member = lastMemberList.find((m) => m.username === rawUsername);
  return { name: (member && member.nickname) || rawUsername, avatar: (member && member.avatar) || rawAvatar };
}

function messageRowHtml(msg, isDm, grouped) {
  const author = isDm ? msg.from : msg.username;
  const { name: displayName, avatar: displayAvatar } = resolveDisplay(author, msg.avatar, isDm);
  const isMine = author === username;
  const canModerate = !isDm && (myRole === "owner" || myRole === "moderator");
  let attachmentHtml = "";
  if (msg.attachment) {
    attachmentHtml = msg.attachment.type.startsWith("image/")
      ? `<img class="msg-attachment-img" src="${msg.attachment.dataUrl}" />`
      : `<a class="msg-attachment-file" href="${msg.attachment.dataUrl}" download="${escapeHtml(msg.attachment.name)}">📄 ${escapeHtml(msg.attachment.name)}</a>`;
  }
  const reactionsHtml = !isDm && msg.reactions && Object.keys(msg.reactions).length
    ? `<div class="msg-reactions">${Object.entries(msg.reactions).map(([emoji, users]) => `<button class="reaction-pill${users.includes(username) ? " mine" : ""}" data-emoji="${emoji}">${emoji} ${users.length}</button>`).join("")}</div>`
    : `<div class="msg-reactions"></div>`;
  const time = new Date(msg.timestamp).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  const color = colorForUsername(author);
  const editedTag = msg.edited ? `<span class="msg-edited">(editado)</span>` : "";
  const pinnedTag = msg.pinned ? `<span class="msg-pinned-tag">📌</span>` : "";
  let actions = "";
  if (isMine) actions += `<button class="msg-edit-btn" data-tooltip="Editar mensagem">${ICONS.pencil}</button><button class="msg-delete-btn" data-tooltip="Apagar mensagem">${ICONS.trash}</button>`;
  else if (!isDm && canModerate) actions += `<button class="msg-delete-btn" data-tooltip="Apagar (moderação)">${ICONS.trash}</button>`;
  if (!isDm) actions += `<button class="msg-reply-btn" data-tooltip="Responder">${ICONS.reply}</button>`;
  if (!isDm && canModerate) actions += `<button class="msg-pin-btn" data-tooltip="${msg.pinned ? "Desafixar mensagem" : "Fixar mensagem"}">${ICONS.pin}</button>`;
  const replyQuoteHtml = !isDm && msg.reply_to_id ? `<div class="reply-quote" data-reply-id="${msg.reply_to_id}">${ICONS.reply}<span class="reply-quote-text">mensagem original</span></div>` : "";

  const gutterHtml = grouped
    ? `<div class="msg-gutter"><span class="msg-hover-time">${time}</span></div>`
    : `<div class="msg-gutter">${avatarHtml(author, displayAvatar, 40)}</div>`;

  const headerHtml = grouped ? "" : `
      <div class="msg-meta">
        <span class="msg-author" style="color:${color}">${escapeHtml(displayName)}</span>
        <span class="msg-time">${time}</span>
        ${editedTag}${pinnedTag}
      </div>`;
  const hoverActionsHtml = `
      <div class="msg-hover-actions">
        ${!isDm ? `<button class="msg-react-btn" data-tooltip="Adicionar reação">${ICONS.reactAdd}</button>` : ""}
        ${actions}
      </div>`;

  return `
    ${gutterHtml}
    <div class="msg-body">
      ${headerHtml}
      ${hoverActionsHtml}
      ${replyQuoteHtml}
      <div class="msg-text-wrap">${msg.text ? `<div class="msg-text">${renderMessageText(msg.text)}</div>` : ""}</div>
      <div class="msg-embed-wrap">${linkEmbedHtml(msg.embed)}</div>
      ${attachmentHtml}
      ${reactionsHtml}
    </div>`;
}

function appendMessage(msg) {
  const emptyState = messagesEl.querySelector(".empty-state");
  if (emptyState) emptyState.remove();
  const grouped = msg.username === lastMsgAuthor && (msg.timestamp - lastMsgTime) < GROUP_WINDOW_MS;
  lastMsgAuthor = msg.username; lastMsgTime = msg.timestamp;
  const div = document.createElement("div");
  div.className = "msg" + (grouped ? " grouped" : "");
  div.dataset.id = msg.id;
  div.innerHTML = messageRowHtml(msg, false, grouped);
  wireMessageActions(div, msg, false);
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}
function wireMessageActions(div, msg, isDm) {
  const reactBtn = div.querySelector(".msg-react-btn");
  if (reactBtn) reactBtn.addEventListener("click", (e) => openReactionPicker(e, msg.id));
  div.querySelectorAll(".reaction-pill").forEach((pill) => pill.addEventListener("click", () => socket.emit("toggle-reaction", { messageId: msg.id, emoji: pill.dataset.emoji })));
  const editBtn = div.querySelector(".msg-edit-btn");
  if (editBtn) editBtn.addEventListener("click", () => startEditMessage(div, msg, isDm));
  const delBtn = div.querySelector(".msg-delete-btn");
  if (delBtn) delBtn.addEventListener("click", () => {
    if (!confirm("Apagar essa mensagem?")) return;
    socket.emit(isDm ? "delete-dm-message" : "delete-message", { messageId: msg.id });
  });
  const pinBtn = div.querySelector(".msg-pin-btn");
  if (pinBtn) pinBtn.addEventListener("click", () => socket.emit("pin-message", { messageId: msg.id }));
  const replyBtn = div.querySelector(".msg-reply-btn");
  if (replyBtn) replyBtn.addEventListener("click", () => startReply(msg));
  resolveReplyQuotes();
}
function startReply(msg) {
  replyTarget = { id: msg.id, username: msg.username, text: msg.text || (msg.attachment ? "📎 anexo" : "") };
  replyPreviewText.textContent = `Respondendo a ${replyTarget.username}: ${replyTarget.text.slice(0, 70)}`;
  replyPreview.classList.remove("hidden");
  messageInput.focus();
}
function hideReplyPreview() { replyPreview.classList.add("hidden"); }
replyCancel.addEventListener("click", () => { replyTarget = null; hideReplyPreview(); });
function resolveReplyQuotes() {
  messagesEl.querySelectorAll(".reply-quote[data-reply-id]").forEach((el) => {
    const original = messagesEl.querySelector(`.msg[data-id="${el.dataset.replyId}"]`);
    if (original) {
      const author = original.querySelector(".msg-author")?.textContent || "";
      const text = original.querySelector(".msg-text")?.textContent || "[anexo]";
      el.querySelector(".reply-quote-text").textContent = `${author}: ${text.slice(0, 80)}`;
    }
  });
}
function startEditMessage(div, msg, isDm) {
  const wrap = div.querySelector(".msg-text-wrap");
  wrap.innerHTML = `<input type="text" class="edit-message-input" value="${escapeHtml(msg.text || "")}" />`;
  const input = wrap.querySelector("input");
  input.focus();
  input.setSelectionRange(input.value.length, input.value.length);
  const commit = () => {
    const val = input.value.trim();
    if (val && val !== msg.text) socket.emit(isDm ? "edit-dm-message" : "edit-message", { messageId: msg.id, text: val });
    else wrap.innerHTML = msg.text ? `<div class="msg-text">${renderMessageText(msg.text)}</div>` : "";
  };
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") commit(); if (e.key === "Escape") wrap.innerHTML = msg.text ? `<div class="msg-text">${renderMessageText(msg.text)}</div>` : ""; });
  input.addEventListener("blur", commit);
}
function updateMessageReactions(msg) {
  const div = messagesEl.querySelector(`.msg[data-id="${msg.id}"]`);
  if (!div) return;
  const grouped = div.classList.contains("grouped");
  div.innerHTML = messageRowHtml(msg, false, grouped);
  wireMessageActions(div, msg, false);
}
function updateDmMessage(msg) {
  const div = messagesEl.querySelector(`.msg[data-id="${msg.id}"]`);
  if (!div) return;
  const grouped = div.classList.contains("grouped");
  div.innerHTML = messageRowHtml(msg, true, grouped);
  wireMessageActions(div, msg, true);
}

let activeReactionMessageId = null;
function openReactionPicker(e, messageId) {
  e.stopPropagation();
  activeReactionMessageId = messageId;
  const rect = e.target.getBoundingClientRect();
  emojiPicker.innerHTML = REACTION_EMOJIS.map((em) => `<span class="emoji-option" data-emoji="${em}">${em}</span>`).join("");
  emojiPicker.style.left = rect.left + "px";
  emojiPicker.style.top = (rect.bottom + 4) + "px";
  emojiPicker.classList.remove("hidden");
  emojiPicker.dataset.mode = "reaction";
}
document.addEventListener("click", (e) => {
  if (!emojiPicker.classList.contains("hidden") && !emojiPicker.contains(e.target) && e.target.id !== "emoji-btn") emojiPicker.classList.add("hidden");
});
emojiPicker.addEventListener("click", (e) => {
  const custom = e.target.closest(".custom-emoji-option");
  if (custom) {
    if (emojiPicker.dataset.mode === "reaction" && activeReactionMessageId) { /* reações usam só unicode fixo por enquanto */ }
    else { messageInput.value += `:${custom.dataset.name}: `; messageInput.focus(); }
    emojiPicker.classList.add("hidden");
    return;
  }
  const addCustomBtn = e.target.closest(".add-custom-emoji-btn");
  if (addCustomBtn) { emojiPicker.classList.add("hidden"); openCreateEmojiFlow(); return; }
  const opt = e.target.closest(".emoji-option");
  if (!opt) return;
  const emoji = opt.dataset.emoji;
  if (emojiPicker.dataset.mode === "reaction" && activeReactionMessageId) socket.emit("toggle-reaction", { messageId: activeReactionMessageId, emoji });
  else { messageInput.value += emoji; messageInput.focus(); }
  emojiPicker.classList.add("hidden");
});
emojiBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const rect = emojiBtn.getBoundingClientRect();
  let html = EMOJI_SET.map((em) => `<span class="emoji-option" data-emoji="${em}">${em}</span>`).join("");
  if (customEmojis.length) {
    html += customEmojis.map((em) => `<span class="emoji-option custom-emoji-option" data-name="${em.name}"><img class="custom-emoji" src="${em.image}" /></span>`).join("");
  }
  if (myRole === "owner") html += `<span class="emoji-option add-custom-emoji-btn" data-tooltip="Adicionar emoji personalizado">➕</span>`;
  emojiPicker.innerHTML = html;
  emojiPicker.style.left = (rect.left - 220) + "px";
  emojiPicker.style.top = (rect.top - 220) + "px";
  emojiPicker.dataset.mode = "compose";
  emojiPicker.classList.toggle("hidden");
});
function openCreateEmojiFlow() {
  const name = prompt("Nome do emoji (só letras/números, sem espaço):");
  if (!name || !name.trim()) return;
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = async () => {
    const file = input.files[0];
    if (!file) return;
    const image = await readAndResizeImage(file, 48);
    socket.emit("create-emoji", { name: name.trim(), image, serverId: currentServerId });
  };
  input.click();
}

function appendSystemMessage(text) {
  lastMsgAuthor = null;
  const div = document.createElement("div");
  div.className = "msg system";
  div.textContent = text;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

let lastMemberList = [];
let lastOnlineUsers = [];
function renderMemberList(users) {
  lastMemberList = users || [];
  memberItems.innerHTML = "";

  const online = lastMemberList.filter((u) => u.status !== "offline");
  const offline = lastMemberList.filter((u) => u.status === "offline");

  const owners = online.filter((u) => u.role === "owner");
  const moderators = online.filter((u) => u.role === "moderator");
  const members = online.filter((u) => !u.role || u.role === "member");

  const renderGroup = (label, list, dimmed) => {
    if (!list.length) return;
    const header = document.createElement("li");
    header.className = "member-group-header";
    header.textContent = `${label} — ${list.length}`;
    memberItems.appendChild(header);
    list.forEach((u) => {
      const li = document.createElement("li");
      if (dimmed) li.className = "member-offline";
      const roleBadge = myRole === "owner" && u.username !== username
        ? `<button class="role-toggle-btn" data-tooltip="Tornar moderador ou membro">${ICONS.shield}</button>` : "";
      li.innerHTML = `${avatarWithStatusHtml(u.username, u.avatar, 26, u.status)}<span class="member-name">${escapeHtml(u.nickname || u.username)}</span>${roleBadge}`;
      li.querySelector(".member-name").addEventListener("click", () => openUserProfile(u.username));
      const roleBtn = li.querySelector(".role-toggle-btn");
      if (roleBtn) roleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const newRole = prompt(`Cargo de ${u.username} nesse servidor: digite "moderator" ou "member"`, "moderator");
        if (newRole === "moderator" || newRole === "member") socket.emit("set-member-role", { targetUsername: u.username, role: newRole, serverId: currentServerId });
      });
      memberItems.appendChild(li);
    });
  };

  renderGroup("Dono", owners);
  renderGroup("Moderadores", moderators);
  renderGroup("Membros", members);
  renderGroup("Offline", offline, true);
}

// ---------- Mensagens diretas ----------
function renderDmList(users) {
  dmListEl.innerHTML = "";
  users.filter((u) => u.username !== username).forEach((u) => {
    const li = document.createElement("li");
    li.className = "channel-item dm-item" + (currentDmUser === u.username ? " active" : "");
    const unreadDot = unreadDms.has(u.username) ? `<span class="unread-dot"></span>` : "";
    li.innerHTML = `${avatarWithStatusHtml(u.username, u.avatar, 22, u.status)}<span class="channel-name">${escapeHtml(u.username)}</span>${unreadDot}`;
    li.addEventListener("click", () => openDm(u.username));
    dmListEl.appendChild(li);
  });
}
function openDm(withUsername) {
  hideFriendsHome();
  currentDmUser = withUsername;
  currentChannel = null;
  lastMsgAuthor = null; lastMsgTime = 0;
  unreadDms.delete(withUsername);
  renderDmList(lastOnlineUsers);
  currentChannelName.textContent = "@" + withUsername;
  messagesEl.innerHTML = "";
  screenBanner.classList.add("hidden");
  remoteVideoWrap.classList.add("hidden");
  searchInput.value = "";
  searchResultsEl.classList.add("hidden");
  messageInput.placeholder = `Mensagem para ${withUsername}...`;
  renderChannelLists();
  socket.emit("dm-open", { withUsername });
}
function renderDmHistory(messages) { messagesEl.innerHTML = ""; lastMsgAuthor = null; lastMsgTime = 0; messages.forEach(appendDmMessage); }
function appendDmMessage(msg) {
  const grouped = msg.from === lastMsgAuthor && (msg.timestamp - lastMsgTime) < GROUP_WINDOW_MS;
  lastMsgAuthor = msg.from; lastMsgTime = msg.timestamp;
  const div = document.createElement("div");
  div.className = "msg" + (grouped ? " grouped" : "");
  div.dataset.id = msg.id;
  div.innerHTML = messageRowHtml(msg, true, grouped);
  wireMessageActions(div, msg, true);
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

// ---------- Anexos ----------
attachBtn.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", async () => {
  const file = fileInput.files[0];
  if (!file) return;
  if (file.size > 3 * 1024 * 1024) { alert("Arquivo muito grande (máx. 3MB por enquanto)."); fileInput.value = ""; return; }
  const reader = new FileReader();
  reader.onload = () => { pendingAttachment = { name: file.name, type: file.type, dataUrl: reader.result }; attachmentName.textContent = file.name; attachmentPreview.classList.remove("hidden"); };
  reader.readAsDataURL(file);
});
attachmentRemove.addEventListener("click", clearAttachment);
function clearAttachment() { pendingAttachment = null; fileInput.value = ""; attachmentPreview.classList.add("hidden"); }

// ---------- Compartilhamento de tela ----------
shareBtn.addEventListener("click", () => { isSharing ? stopSharingScreen() : openSourcePicker(); });
async function openSourcePicker() {
  if (activeSharerId) { alert("Já tem alguém compartilhando a tela neste canal."); return; }
  const sources = await window.electronAPI.getScreenSources();
  const overlay = document.createElement("div");
  overlay.className = "picker-overlay";
  overlay.innerHTML = `
    <div class="picker-modal share-picker-modal">
      <div class="share-picker-header">
        <h2>Escolha o que compartilhar</h2>
        <button class="icon-btn share-picker-close">${ICONS.x}</button>
      </div>
      <div class="picker-grid share-picker-grid">
        ${sources.map((s) => `
          <div class="picker-item share-picker-item" data-id="${s.id}">
            <div class="share-picker-thumb"><img src="${s.thumbnail}" /></div>
            <span class="share-picker-name">${escapeHtml(s.name)}</span>
          </div>`).join("")}
      </div>
    </div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener("click", async (e) => {
    if (e.target === overlay || e.target.closest(".share-picker-close")) { overlay.remove(); return; }
    const item = e.target.closest(".picker-item");
    if (!item) return;
    overlay.remove();
    await startSharingScreen(item.dataset.id);
  });
}
async function startSharingScreen(sourceId) {
  try { localScreenStream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { mandatory: { chromeMediaSource: "desktop", chromeMediaSourceId: sourceId } } }); }
  catch (err) { alert("Não foi possível capturar a tela: " + err.message); return; }
  isSharing = true;
  shareBtn.innerHTML = ICONS.monitor;
  shareBtn.dataset.tooltip = "Parar de compartilhar a tela";
  shareBtn.classList.add("active-toggle");
  localScreenStream.getVideoTracks()[0].onended = stopSharingScreen;
  socket.emit("screen-share-start");

  // Prévia: você também vê sua própria tela sendo compartilhada
  remoteVideo.srcObject = localScreenStream;
  remoteVideo.muted = true;
  remoteVideoWrap.classList.remove("hidden");
  screenBanner.textContent = "Você está compartilhando sua tela";
  screenBanner.classList.remove("hidden");
}
function stopSharingScreen() {
  if (!isSharing) return;
  isSharing = false;
  shareBtn.innerHTML = ICONS.monitor;
  shareBtn.dataset.tooltip = "Compartilhar sua tela";
  shareBtn.classList.remove("active-toggle");
  if (localScreenStream) { localScreenStream.getTracks().forEach((t) => t.stop()); localScreenStream = null; }
  screenPeerConnections.forEach((pc) => pc.close());
  screenPeerConnections.clear();
  socket.emit("screen-share-stop");
  remoteVideo.srcObject = null;
  remoteVideo.muted = false;
  remoteVideoWrap.classList.add("hidden");
  screenBanner.classList.add("hidden");
}
function startWatchingScreen(sharerId) { socket.emit("request-screen-offer", { sharerId }); }

// ---------- Tela cheia (pra quem está assistindo o compartilhamento) ----------
function toggleFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    remoteVideoWrap.requestFullscreen().catch(() => {});
  }
}
fullscreenBtn.addEventListener("click", toggleFullscreen);
remoteVideo.addEventListener("dblclick", toggleFullscreen);
document.addEventListener("fullscreenchange", () => {
  const isFull = !!document.fullscreenElement;
  remoteVideoWrap.classList.toggle("is-fullscreen", isFull);
  fullscreenBtn.innerHTML = isFull ? ICONS.minimize : ICONS.maximize;
  fullscreenBtn.dataset.tooltip = isFull ? "Sair da tela cheia" : "Tela cheia";
});

// ---------- Voz ----------
function createVoicePeer(peerId) {
  const pc = new RTCPeerConnection(RTC_CONFIG);
  voicePeerConnections.set(peerId, pc);
  if (localVoiceStream) localVoiceStream.getTracks().forEach((t) => pc.addTrack(t, localVoiceStream));
  pc.onicecandidate = (e) => e.candidate && sendSignal(peerId, { kind: "voice-ice", candidate: e.candidate });
  pc.ontrack = (e) => {
    if (e.track.kind === "video") {
      let videoEl = voiceVideoEls.get(peerId);
      if (!videoEl) {
        videoEl = document.createElement("div");
        videoEl.className = "video-tile";
        const v = document.createElement("video");
        v.autoplay = true; v.playsInline = true;
        const label = document.createElement("span");
        label.className = "video-tile-label";
        label.textContent = voicePeerNames.get(peerId) || "";
        videoEl.appendChild(v);
        videoEl.appendChild(label);
        videoGrid.appendChild(videoEl);
        videoGrid.classList.remove("hidden");
        voiceVideoEls.set(peerId, videoEl);
      }
      videoEl.querySelector("video").srcObject = e.streams[0];
      return;
    }
    let audioEl = voiceAudioEls.get(peerId);
    if (!audioEl) { audioEl = document.createElement("audio"); audioEl.autoplay = true; audioEl.muted = isDeafened; document.body.appendChild(audioEl); voiceAudioEls.set(peerId, audioEl); }
    audioEl.srcObject = e.streams[0];
  };
  return pc;
}
async function joinVoiceChannel(channelId) {
  if (inVoiceChannel === channelId) return;
  if (inVoiceChannel) leaveVoiceChannel();
  try { localVoiceStream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
  catch (err) { alert("Não foi possível acessar o microfone: " + err.message); return; }
  inVoiceChannel = channelId;
  isMuted = false;
  isDeafened = false;
  muteBtn.classList.remove("active-toggle");
  muteBtn.innerHTML = ICONS.mic;
  muteBtn.dataset.tooltip = "Mutar microfone";
  deafenBtn.classList.remove("active-toggle");
  const ch = channels.find((c) => c.id === channelId);
  voiceBarChannelEl.textContent = ch ? ch.name : "Voz";
  voiceBar.classList.remove("hidden");
  voicePanel.classList.remove("hidden");
  renderChannelLists();
  socket.emit("join-voice", { channelId });
}
function leaveVoiceChannel() {
  if (!inVoiceChannel) return;
  socket.emit("leave-voice", { channelId: inVoiceChannel });
  if (localVoiceStream) { localVoiceStream.getTracks().forEach((t) => t.stop()); localVoiceStream = null; }
  if (localCameraStream) { localCameraStream.getTracks().forEach((t) => t.stop()); localCameraStream = null; }
  isCameraOn = false;
  cameraBtn.classList.remove("active-toggle");
  cameraBtn.innerHTML = ICONS.camera;
  cameraBtn.dataset.tooltip = "Ativar câmera";
  voicePeerConnections.forEach((pc) => pc.close());
  voicePeerConnections.clear();
  voiceAudioEls.forEach((el) => el.remove());
  voiceAudioEls.clear();
  voiceVideoEls.forEach((el) => el.remove());
  voiceVideoEls.clear();
  videoGrid.classList.add("hidden");
  voicePeerNames.clear();
  inVoiceChannel = null;
  voiceBar.classList.add("hidden");
  voicePanel.classList.add("hidden");
  renderChannelLists();
}
leaveVoiceBtn.addEventListener("click", leaveVoiceChannel);
muteBtn.addEventListener("click", () => {
  if (!localVoiceStream) return;
  isMuted = !isMuted;
  localVoiceStream.getAudioTracks().forEach((t) => (t.enabled = !isMuted));
  muteBtn.classList.toggle("active-toggle", isMuted);
  muteBtn.innerHTML = isMuted ? ICONS.micOff : ICONS.mic;
  muteBtn.dataset.tooltip = isMuted ? "Desmutar microfone" : "Mutar microfone";
});
cameraBtn.addEventListener("click", toggleCamera);
async function toggleCamera() {
  if (!inVoiceChannel) return;
  if (!isCameraOn) {
    try { localCameraStream = await navigator.mediaDevices.getUserMedia({ video: true }); }
    catch (err) { alert("Não foi possível acessar a câmera: " + err.message); return; }
    isCameraOn = true;
    const track = localCameraStream.getVideoTracks()[0];
    voicePeerConnections.forEach((pc) => pc.addTrack(track, localCameraStream));
    showLocalVideoTile(localCameraStream);
    cameraBtn.classList.add("active-toggle");
    cameraBtn.innerHTML = ICONS.cameraOff;
    cameraBtn.dataset.tooltip = "Desligar câmera";
    track.onended = () => { if (isCameraOn) toggleCamera(); };
  } else {
    isCameraOn = false;
    if (localCameraStream) {
      const track = localCameraStream.getVideoTracks()[0];
      voicePeerConnections.forEach((pc) => {
        const sender = pc.getSenders().find((s) => s.track === track);
        if (sender) pc.removeTrack(sender);
      });
      localCameraStream.getTracks().forEach((t) => t.stop());
      localCameraStream = null;
    }
    removeLocalVideoTile();
    cameraBtn.classList.remove("active-toggle");
    cameraBtn.innerHTML = ICONS.camera;
    cameraBtn.dataset.tooltip = "Ativar câmera";
    voicePeerConnections.forEach((_, peerId) => sendSignal(peerId, { kind: "video-off" }));
  }
  await renegotiateAllVoicePeers();
}
async function renegotiateAllVoicePeers() {
  for (const [peerId, pc] of voicePeerConnections) {
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    sendSignal(peerId, { kind: "voice-offer", offer });
  }
}
function showLocalVideoTile(stream) {
  let tile = voiceVideoEls.get("local");
  if (!tile) {
    tile = document.createElement("div");
    tile.className = "video-tile";
    const v = document.createElement("video");
    v.autoplay = true; v.muted = true; v.playsInline = true;
    const label = document.createElement("span");
    label.className = "video-tile-label";
    label.textContent = username + " (você)";
    tile.appendChild(v); tile.appendChild(label);
    videoGrid.appendChild(tile);
    voiceVideoEls.set("local", tile);
  }
  tile.querySelector("video").srcObject = stream;
  videoGrid.classList.remove("hidden");
}
function removeLocalVideoTile() {
  const tile = voiceVideoEls.get("local");
  if (tile) { tile.remove(); voiceVideoEls.delete("local"); }
  if (!voiceVideoEls.size) videoGrid.classList.add("hidden");
}
deafenBtn.addEventListener("click", () => {
  if (!localVoiceStream) return;
  isDeafened = !isDeafened;
  voiceAudioEls.forEach((el) => (el.muted = isDeafened));
  deafenBtn.classList.toggle("active-toggle", isDeafened);
  deafenBtn.dataset.tooltip = isDeafened ? "Reativar áudio" : "Ensurdecer (mutar tudo)";
  if (isDeafened && !isMuted) { isMuted = true; localVoiceStream.getAudioTracks().forEach((t) => (t.enabled = false)); muteBtn.classList.add("active-toggle"); muteBtn.innerHTML = ICONS.micOff; muteBtn.dataset.tooltip = "Desmutar microfone"; }
});
function renderVoiceMembers(channelId, members) {
  const voiceChannelsArr = channels.filter((c) => c.type === "voice");
  const idx = voiceChannelsArr.findIndex((c) => c.id === channelId);
  const li = idx >= 0 ? voiceChannelsEl.children[idx] : null;
  if (li) {
    let sub = li.querySelector(".voice-sub-members");
    if (!sub) { sub = document.createElement("div"); sub.className = "voice-sub-members"; li.appendChild(sub); }
    sub.textContent = members.join(", ");
  }
  if (inVoiceChannel === channelId) {
    voiceMembersListEl.innerHTML = members.map((m) => `<div class="voice-member">${avatarHtml(m, null, 22)}<span>${escapeHtml(m)}</span></div>`).join("");
  }
}
