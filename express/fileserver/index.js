var express = require("express");
var app = express();

app.use(express.static('public'));  //

app.get("/", function(req,res){
  res.send('<h1>Hello from File Server route</h1>');
})

var myServer = app.listen(3000, function() {
  console.log("Server listening on port 3000");
});
