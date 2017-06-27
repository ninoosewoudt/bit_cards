let server = require('http').createServer();
let io = require('socket.io').listen(server);
let port = 3000;
let users = [];
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

