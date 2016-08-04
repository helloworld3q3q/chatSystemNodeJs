// create the server 
var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

// specify port 
server.listen(3000);

// create route

app.use(express.static(__dirname + '/'));
// root directory
// get http request and response
app.get('/' , function(request , response)
{
	//response.sendFile(__dirname+ '/myScript.js');
	response.sendFile(__dirname + '/index.html');
});


// on connection event
// paramter socket of connector
io.sockets.on('connection' , function(socket)
{
	socket.on('send message' , function(data){
		/// send it to all the users 
		/// this will send to everyone including me
		//io.sockets.emit('send message' , data);
		console.log('broadcasting ' + data);
		socket.broadcast.emit('broadcast message' , data);
	});
});

