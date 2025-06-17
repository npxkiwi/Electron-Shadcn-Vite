const {app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title:"Shadcn App",
        width:500,
        height:500,
    });
    mainWindow.webContents.openDevTools();

    const startUrl = url.format({
        pathname: path.join(__dirname, './app/dist/index.html'),
        protocol: 'file',
    });

    mainWindow.loadURL(startUrl)
}

app.whenReady().then(createMainWindow);