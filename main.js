const { app, BrowserWindow, ipcMain, desktopCapturer } = require("electron");
const path = require("path");
const fs = require("fs");
const { autoUpdater } = require("electron-updater");

autoUpdater.autoDownload = true; // baixa sozinho em segundo plano assim que detecta uma versão nova
autoUpdater.autoInstallOnAppQuit = false; // só instala quando a pessoa clicar (não força ao fechar)

let mainWindow = null;

const configPath = path.join(app.getPath("userData"), "config.json");
const DEFAULT_SERVER_URL = "https://chatapp-server-tb7v.onrender.com";

function readConfig() {
  try {
    return JSON.parse(fs.readFileSync(configPath, "utf-8"));
  } catch (_) {
    return { serverUrl: DEFAULT_SERVER_URL };
  }
}

function writeConfig(config) {
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 780,
    minWidth: 900,
    minHeight: 600,
    backgroundColor: "#1e1f22",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadFile(path.join(__dirname, "renderer", "index.html"));
  mainWindow = win;
}

// ---------- Auto-update ----------
autoUpdater.on("update-downloaded", () => {
  if (mainWindow) mainWindow.webContents.send("update-ready");
});
autoUpdater.on("error", (err) => {
  console.error("Erro ao verificar atualização:", err.message);
});

ipcMain.on("install-update", () => {
  autoUpdater.quitAndInstall();
});

// Lista as telas/janelas disponíveis para compartilhar (pedido pelo renderer)
ipcMain.handle("get-screen-sources", async () => {
  const sources = await desktopCapturer.getSources({
    types: ["screen", "window"],
    thumbnailSize: { width: 300, height: 180 },
  });
  return sources.map((s) => ({
    id: s.id,
    name: s.name,
    thumbnail: s.thumbnail.toDataURL(),
  }));
});

ipcMain.handle("get-config", () => readConfig());
ipcMain.handle("set-config", (_e, partial) => {
  const config = { ...readConfig(), ...partial };
  writeConfig(config);
  return config;
});

app.whenReady().then(() => {
  createWindow();
  autoUpdater.checkForUpdates().catch((err) => console.error("Falha ao checar atualização:", err.message));
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

