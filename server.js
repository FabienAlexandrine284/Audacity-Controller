const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/record', (req, res) => {
	console.log("Pressed R");
	
});

app.get('/play', (req, res) => {
	console.log("Pressed Space");
	
});

app.get('/stop', (req, res) => {
	console.log("Pressed Space");
	
});

app.listen(port, () => console.log(`Listening on port ${port}`));