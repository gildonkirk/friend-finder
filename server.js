var express = require('express');
var app = express();
var parser = require('body-parser');
var path = require('path');

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

var PORT = 3000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.text());
app.use(parser.json({ type: "application/vnd.api+json" }));









app.listen(PORT, function() {
	console.log('Listening on PORT: ' + PORT);
})