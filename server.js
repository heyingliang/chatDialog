/*const webSocketServer = require('ws').Server,
    wss = new webSocketServer({port:8181});
wss.on('connection',function(ws,req){
    ws.on('message', function (message) {
        ws.send(message);
    });
});
*/
const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 8181});

// Broadcast to all.
wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    });
};
wss.on('connection', function connection(ws,req) {
    ws.on('message', function incoming(data) {
        // Broadcast to everyone else.
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
        ws.send(JSON.stringify({verify : true}));
    });
});