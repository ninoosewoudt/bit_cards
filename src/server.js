var server = require('http').createServer();
var io = require('socket.io').listen(server);


io.on('connection', function (client) {
    console.log('new client');



    client.on('disconnect', function () {
        console.log('client disconnect');
    });
});

server.listen(3000, function () {
    console.log('listening on *:8080');
});
