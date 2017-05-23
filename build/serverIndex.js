var express = require('express');
var app = express();

var http = require('http').createServer(app);
var io = require('socket.io')(http);



app.use(express.static(__dirname));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat message', function(msg){
        console.log(msg);
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});