var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
    // app.use(bodyParser.urlencoded({extended:true}));

// app.use(express.static('../client'));

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var url = require('url');
var counter = 1;
var messages = [
  // {
  //   username: "Josh",
  //   text: "hello there",
  //   objectID: counter
  // }
];

app.use(bodyParser.json());

// fs.readFile("./database.txt", "utf-8",function(err,data){
//   if (err) throw err;
//   console.log(data);
// });

app.get('/', function(req, res) {
  console.log('get successful');
  res.send(JSON.stringify(messages));
  res.end();    
}); 

app.post('/', function(req, res) {
    req.body.objectID = ++counter;
    messages.push(req.body);
    files = messages;
    console.log(files);
    fs.writeFile("./database.txt",JSON.stringify(files),function(err){
      if (err) {console.log(req.body)};
    });
    res.status(201).send("it's done");
    res.end();
  });

app.options('/', function(req, res) {
    console.log('!OPTIONS');
    res.set(defaultCorsHeaders);
    res.end();
});

var server = app.listen(3000,function(){
  var host = server.address().address;
  var port = server.address().port;
});

