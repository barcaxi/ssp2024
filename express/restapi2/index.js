var express = require("express");
var routes = require('./routes/routes.js');

var app = express();

// setup routes  
routes.routes(app);

app.get("/", function(req,res){   
  res.send("hello, world!");
});

var myServer = app.listen(3000, function() {
  console.log("Server listening on port 3000");
});
