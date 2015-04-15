var express = require('express');
var app = express();

app.get('/haha', printHello);

function printHello(req, res){
	res.send('Hello World!');
}

var server = app.listen(8080, serverListen);

function serverListen(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("Listening at http://%s:%s", host, port);
}