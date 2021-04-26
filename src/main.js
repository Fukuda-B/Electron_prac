const { app, Menu, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ width: 800, height: 600, 'webPreferences': {'webviewTag': true}});

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
    }));

    // mainWindow.webContents.openDevTools();
    Menu.setApplicationMenu(null);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
