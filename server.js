const express = require('express');
//var bodyParser = require("body-parser");
var http = require('http');

const app = express();
const port = process.env.PORT || 5000;

/*app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());*/

/*app.get('/',function(req,res){
  res.sendfile("index.json");

  	if(req.query['record']=="true")
	{
		console.log("RECORD IS TRUE");
		res.send('record: ' + false);
	}

	 if(req.query['play']=="true")
	{
		console.log("PLAY IS TRUE");
		res.send('play: ' + false);
	}

	if(req.query['stop']=="true")
	{
		console.log("STOP IS TRUE");
		res.send('stop: ' + false);
	}
});*/

var server = http.Server(app);

var io = require('socket.io')(server);

//var socket = io.connect('http://localhost:5000');

/*app.get('/record', (req, res) => {
	console.log("RECORD IS TRUE");

	/*if(req.query['record']=="true")
	{
		console.log("RECORD IS TRUE");
		res.send('record: ' + false);
	}
});*/

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



/*app.post('/record', (req, res) => {

	console.log("POST RECORD");
	res.send('record: ' + true);


});

app.get('/play', (req, res) => {

	if(req.query['play']=="true")
	{
		console.log("PLAY IS TRUE");
		res.send('play: ' + false);
	}
});

app.post('/play', (req, res) => {

	console.log("POST PLAY");
	res.send('play: ' + true);

});

app.get('/stop', (req, res) => {

	if(req.query['stop']=="true")
	{
		console.log("STOP IS TRUE");
		res.send('stop: ' + false);
	}
	
});

app.post('/stop', (req, res) => {

	console.log("POST STOP");
	res.send('stop: ' + true);

});*/



server.listen(port, () => console.log(`Listening on port ${port}`));