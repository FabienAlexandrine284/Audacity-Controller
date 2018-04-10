const express = require('express');
var bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/record', (req, res) => {

	if(req.query['record']=="true")
	{
		console.log("RECORD IS TRUE");
		res.send('record: ' + false);
	}

	res.send('record: ' + req.query['record']);

});

app.post('/record', (req, res) => {

	console.log("POST RECORD");
	res.send('record: ' + true);

});

app.get('/play', (req, res) => {

	if(req.query['play']=="true")
	{
		console.log("PLAY IS TRUE");
		res.send('play: ' + false);
	}

	res.send('play: ' + req.query['play']);
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

	res.send('stop: ' + req.query['stop']);
	
});

app.post('/stop', (req, res) => {

	console.log("POST STOP");
	res.send('stop: ' + true);

});

app.listen(port, () => console.log(`Listening on port ${port}`));