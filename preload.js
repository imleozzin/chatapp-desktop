const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  getScreenSources: () => ipcRenderer.invoke("get-screen-sources"),
  getConfig: () => ipcRenderer.invoke("get-config"),
  setConfig: (partial) => ipcRenderer.invoke("set-config", partial),
  onUpdateReady: (callback) => ipcRenderer.on("update-ready", callback),
  installUpdate: () => ipcRenderer.send("install-update"),
});
