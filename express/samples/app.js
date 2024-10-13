var express = require("express");
var app = express();

app.get("/", function(req,res){   // a route/endpoint request
  res.send('<h1>Hello Express</h1>');   // default mime-type is text/html
});

var myServer = app.listen(3000, function() {
  console.log("Server listening on port 3000");
});