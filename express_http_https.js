var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');

var app = express();

var options = {
	host: 'localhost',
	key: fs.readFileSync('ssl/server.key'),
	cert: fs.readFileSync('ssl/server.crt')
};

http.createServer(app).listen(3008);
https.createServer(options, app).listen(3007);
app.get('/', function(req, res) {
	res.send('Hello from Express');
});