const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  getScreenSources: () => ipcRenderer.invoke("get-screen-sources"),
  getConfig: () => ipcRenderer.invoke("get-config"),
  getAppVersion: () => ipcRenderer.invoke("get-app-version"),
  setConfig: (partial) => ipcRenderer.invoke("set-config", partial),
  onUpdateReady: (callback) => ipcRenderer.on("update-ready", callback),
  installUpdate: () => ipcRenderer.send("install-update"),
  minimizeWindow: () => ipcRenderer.send("window-minimize"),
  toggleMaximizeWindow: () => ipcRenderer.send("window-maximize-toggle"),
  closeWindow: () => ipcRenderer.send("window-close"),
  onWindowMaximized: (callback) => ipcRenderer.on("window-maximized", (_e, isMax) => callback(isMax)),
});
