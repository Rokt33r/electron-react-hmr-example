'use strict'
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')

let mainWindow = null

app.on('ready', function init () {
  mainWindow = new BrowserWindow({
    width: 1080,
    height: 720
  })
  mainWindow.webContents.loadURL(path.join('file://', __dirname, 'browser/main.html'))
})
