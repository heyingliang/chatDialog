var socket = new WebSocket('ws://localhost:8181');
socket.onopen = function () {
    console.log("已连接！");
    socket.send('hello');
}
socket.onmessage = function(event){
    var data = event.data;
    console.log('返回消息:'+data);
};

