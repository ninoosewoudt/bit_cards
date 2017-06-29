var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
let io = require('socket.io')(server);
let port = process.env.PORT || 80;
let users = [];

app.get('/', function (req, res) {
    console.log("yooo");
    res.render('index.html');
});


io.on('connection', (socket) => {
    console.log("a connection");
    if (users.length > 2)
        socket.disconnect();
    socket.emit("onConnected", users.length);
    users.push(socket);
    socket.on("turn", (card) => {
        io.sockets.emit("turn", card);
        //for (let i = 0; i < users.length; i++)
        //   users[i].emit("turn", card);
    });
    socket.on('disconnect', () => {
        console.log('client disconnect');
        for (let i = 0; i < users.length; i++)
            if (users[i].id === socket.id)
                users.splice(i, 1);

    });
    if (users.length === 2)
        for (let i = 0; i < users.length; i++)
            users[i].emit("start");
});

server.listen(port, () => {
    console.log('listening on' + port);
});

