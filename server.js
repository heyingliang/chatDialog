var webSocketServer = require('ws').Server,
    wss = new webSocketServer({port:8181});
var uid = require('node-uuid');
wss.on('connection',function(ws){
    console.log('client Connected');
    ws.on('message', function (message) {
        console.log(message);
        ws.send('收到数据:'+message);
        console.log(uid.v1());
    });
});
