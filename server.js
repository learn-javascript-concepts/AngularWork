var http = require("http");
var express = require("express");

var app = express();
var server = http.createServer(app);

app.set("view engine", "vash");
app.use(express.static(__dirname + "/public"));

var controllers = require("./controllers");

controllers.init(app);

server.listen(5000);



