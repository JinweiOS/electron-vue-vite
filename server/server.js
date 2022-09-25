const { WebSocketServer } = require('ws')


const wsServer = new WebSocketServer({
    port: 9000
})

let ball = 0;

wsServer.on('connection', (wsClient) => {
    // 此时是成功建立了连接，开始与客户端交互
    wsClient.on('message', (data) => {
        console.log(data.toString('utf-8'))
        const count = parseInt(data.toString('utf-8')) + 1
        // 保存count
        ball = count
        // 延迟一会儿
        setTimeout(() => {
            wsClient.send(count)
        }, 1000)
    })
    // 第一次会执行
    wsClient.send(ball)
})

