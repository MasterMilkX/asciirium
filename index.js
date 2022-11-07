const { app, BrowserWindow } = require('electron')

function createWindow () {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 1000,
        height: 600,
        icon: __dirname + '/data/imgs/icon.png',  //image from https://www.flaticon.com/free-icons/terrarium
        webPreferences: {
        nodeIntegration: true
        }
    })
    
    // and load the index.html of the app.
    // win.setMenuBarVisibility(false);
    win.loadFile('index.html');

    //open console on the side
    win.webContents.openDevTools();
    
}

app.whenReady().then(createWindow)