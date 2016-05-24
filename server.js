var express = require('express');
var request = require('request');
var favicon = require('serve-favicon');
var app = express();
var port = process.env.PORT || 3000;
var token = '2259798362.1fb234f.b87adebc5dfd47f8a55adae001f63ca2';

app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.get('/', function(req, res) {
	res.redirect('/index.html');
});

app.get('/photos', function(req, res) {
	var reqInfo = {};
	var lat = req.query.lat;
	var lng = req.query.lng;
	var rad = req.query.rad;
	reqInfo.ip = req.connection.remoteAddress
	reqInfo.lat = lat;
	reqInfo.lng = lng;
	reqInfo.rad = rad;
	reqInfo.timestamp = new Date().toISOString();
	console.log(reqInfo);
	request('https://api.instagram.com/v1/media/search?lat=' + lat + '&lng=' + lng + '&distance=' + rad + '&access_token=' + token,
		function(error, response, body) {
			res.send(body);
		});
});

app.listen(port, function() {
	console.log('Express server running on port ' + port);
});