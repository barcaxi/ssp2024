var express = require("express");
var app = express();

app.get("/who/:name?", function(req,res){
  var name = req.params.name;
  res.send(`Hello ${name}`);
  // res.send('Hello ' + name);
});

app.get("/who/:name?/:email?", function(req,res){
  res.send(`Hello ${req.params.name} [${req.params.email}]`);
  //res.send('Hello ' + req.params.name + ' [' + req.params.email + ']');
});

var myServer = app.listen(3000, function() {
  console.log("Server listening on port 3000");
});