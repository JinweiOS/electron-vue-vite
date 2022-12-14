const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })
  if (process.env.NODE_ENV === 'development') {
    const timer = setInterval(async () => {
      win.loadURL('http://127.0.0.1:5173/').then(() => {
        console.log('Electron starts success!😂')
        win.webContents.openDevTools();
        clearInterval(timer)
      }).catch(() => {
        console.log('electron are waitting vite starting...')
      })
    }, 2000)
  } else {
    win.loadFile(path.join(__dirname, '../vite-sources/index.html'))
  }

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
