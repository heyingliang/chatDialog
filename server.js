const webSocketServer = require('ws').Server,
    wss = new webSocketServer({port:8181});
const url = require('url');
wss.on('connection',function(ws,req){
    console.log(url.parse(req.url));
    ws.on('message', function (message) {
        console.log(message);
        ws.send('我收到'+message);
    });
});
