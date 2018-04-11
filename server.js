const express = require('express');
//var bodyParser = require("body-parser");
var http = require('http');
var https = require('https');

const app = express();
const port = process.env.PORT || 5000;

var server = http.Server(app);

var io = require('socket.io')(server);
var io_c = require('socket.io-client');


app.get('/record', (req, res) => {
      console.log("ABOUT TO RECORD");
     var socket = io_c.connect('https://audacity-controller-server.herokuapp.com/record');
});

app.get('/play', (req, res) => {
  console.log("ABOUT TO PLAY");
	var socket = io_c.connect('https://audacity-controller-server.herokuapp.com/play');
});


app.get('/stop', (req, res) => {
  console.log("ABOUT TO STOP");
	var socket = io_c.connect('https://audacity-controller-server.herokuapp.com/stop');
});



io.of('/record').on('connection', function (socket) {
		console.log("SENDING RECORD SOCKET");
  		socket.broadcast.emit('record', 'You are now recording !');

  });

io.of('/play').on('connection', function (socket) {
		console.log("SENDING PLAY SOCKET");
  		socket.broadcast.emit('play', 'You are now playing !');

  });

io.of('/stop').on('connection', function (socket) {
		console.log("SENDING STOP SOCKET");
  		socket.broadcast.emit('stop', 'You are now stopped !');

  });




server.listen(port, () => console.log(`Listening on port ${port}`));