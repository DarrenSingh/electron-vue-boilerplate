const { app, BrowserWindow } = require('electron')

const electron = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 250,
    height: 350,
    resizable: false,
    darkTheme: true,
    movable: true,
    // titleBarStyle: "hiddenInset",
    webPreferences: {
       nodeIntegration: true
    }
  })


  // and load the index.html of the app.
  win.loadFile('dist/index.html')

}

app.on('ready', createWindow)
