var express = require('express');
var fs = require("fs");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  var responseText = fs.readFileSync('index.html', 'utf8');
  var buffer = fs.readFileSync('index.html');
  var responseText = buffer.toString('utf8');
  response.send(responseText);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
