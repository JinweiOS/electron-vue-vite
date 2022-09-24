const childProccess = require('child_process')

childProccess.spawn('electron', ['.'], {
    stdio: 'inherit',
    shell: true
})

childProccess.spawn('vite', {
    stdio: 'inherit',
    shell: true
})