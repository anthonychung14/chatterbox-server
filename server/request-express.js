var express = require('express');
var app = express();
var url = require('url');
var dataStorage = {
  results: []
};

var headers = defaultCorsHeaders;

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  "content-type": "text/plain" 
};

app.route('/')
  .get(function(req,res){
  statusCode = 201
  res.set('Content-Type', 'text/html')
  res.writeHead(statusCode, headers);
  res.send("hello");
})
  .post(function(req, res) {

  })


var server = app.listen(3000,function(){
  var host = server.address().address;
  var port = server.address().port;
})


