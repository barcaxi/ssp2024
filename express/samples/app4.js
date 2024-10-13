var express = require("express");
var app = express();

app.get("/", function(req,res){
  res.send('<h1>Hello Express</h1>');
});

app.get("*", function(req,res){ // must be last route in list
  res.send('404: Invalid route...');
});

var myServer = app.listen(3000, function() {
  console.log("Server listening on port 3000");
});