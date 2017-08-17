var express = require('express');
var app = express();
var parser = require('body-parser');
var path = require('path');

var PORT = 3000;

app.get('/survey', function(req, res) {
	res.sendFile(path.join(__dirname, 'app/public/survey.html'));
});

app.use(function(req, res) {
	res.sendFile(path.join(__dirname, 'app/public/home.html'));
});









app.listen(PORT, function() {
	console.log('Listening on PORT: ' + PORT);
})