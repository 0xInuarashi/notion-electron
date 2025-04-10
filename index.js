const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: path.join(__dirname, 'assets/icon.png')
    });

    // Load your webpage url
    win.loadURL('https://notion.so');
};

app.whenReady().then(createWindow);
