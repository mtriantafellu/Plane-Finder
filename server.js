var express = require ("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

var routes = require("./app/routing/html.js") (app);

var api = require("./app/routing/api.js");

app.listen(3000, function() {
    console.log("Server is starting at port 3000");

});