var express = require('express');
var request = require('request');
var app = express();
var port = process.env.PORT || 3000;
var token = '2259798362.1fb234f.b87adebc5dfd47f8a55adae001f63ca2';


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.redirect('/index.html');
});

app.get('/photos', function(req, res) {
	var reqInfo = {}
	var lat = req.query.lat;
	var lng = req.query.lng;
	reqInfo.ip = req.connection.remoteAddress;
	reqInfo.lat = lat;
	reqInfo.lng = lng;
	reqInfo.timestamp = new Date().toISOString();
	console.log(reqInfo);
	request('https://api.instagram.com/v1/media/search?lat=' + lat + '&lng=' + lng + '&distance=500&access_token=' + token,
		function(error, response, body) {
			res.send(body);
		});
});

app.listen(port, function() {
	console.log('Express server running on port + ' + port);
});