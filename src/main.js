const { app, BrowserWindow } = require("electron");
const path = require('node:path')

// create a browserwindow
const createWindow = () => {
  const win = new BrowserWindow({
    height: 500,
    width: 500,
    webPreferences:{
        preload :path.join(__dirname,'./preload.js') 
    }
  });

  //  spcify the path of HTML
  win.loadFile("src/index.html");
};

// create the window when app events are ready that returns a promise
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
});

// quiting the app except MAC
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

