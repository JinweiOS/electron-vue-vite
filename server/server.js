const { WebSocketServer } = require('ws')


const wsServer = new WebSocketServer({
    port: 9000
})

let ball = 0;

wsServer.on('connection', (wsClient) => {
    // // 此时是成功建立了连接，开始与客户端交互
    // wsClient.on('message', (data) => {
    //     console.log(data.toString('utf-8'))
    //     const count = parseInt(data.toString('utf-8')) + 1
    //     // 保存count
    //     ball = count
    //     // 延迟一会儿
    //     setTimeout(() => {
    //         wsClient.send(count)
    //     }, 1000)
    // })
    // // 第一次会执行
    // wsClient.send(ball)
    

    /**
     * 推送个前端
     */
    setInterval(() => {
        wsClient.send(JSON.stringify(randomData()))
    }, 100)
    
})

let now = new Date(1997, 9, 3);
let oneDay = 24 * 3600 * 1000;
let value = Math.random() * 1000;
function randomData() {
    now = new Date();
    value = value + Math.random(now + oneDay) * 21 - 10;
    return {
      name: now.toString(),
      value: [
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
        Math.round(value)
      ]
    };
  }

