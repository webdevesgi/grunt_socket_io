var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(1337);
var io = require('socket.io').listen(server);

exports = module.exports = server;
// delegates use() function
exports.use = function() {
    app.use.apply(app, arguments);
};

io.sockets.on('connection', function(socket) {
	console.log('Nouvel utilisateur');

	socket.on('goBall', function(params){
		console.log('gogogo');
	    socket.broadcast.emit('goBallViaServer', params);
	});

    socket.on('disconnect', function(reason) {
        console.log('L\'utilisateur s\'est déconnecté.');
        console.log(reason);
	});
});