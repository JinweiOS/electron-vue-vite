const { WebSocket } = require('ws')

const client = new WebSocket('ws://127.0.0.1:9000')

client.on('message', (msgFromServer) => {
    console.log(msgFromServer.toString('utf-8'))
    const count = parseInt(msgFromServer.toString('utf-8')) + 1
    // 延迟一会儿
    setTimeout(() => {
        client.send(count)
    }, 1000)
})
