var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);







app.listen(PORT, function() {
	console.log('Listening on PORT: ' + PORT);
})