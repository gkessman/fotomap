var express = require('express');
var request = require('request');
var favicon = require('serve-favicon');
var app = express();
var port = process.env.PORT || 3000;
var path = '/public';
var token = '<INSTAGRAM-API-ACCESS-TOKEN>';

if(process.env.NODE_ENV == 'production') {
	path = '/build';
} else {
	path = '/public';
}

app.use(express.static(__dirname + path));
app.use(favicon(__dirname + path + '/images/favicon.ico'));

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
	console.log(process.env.NODE_ENV + ' server running on port ' + port);
});