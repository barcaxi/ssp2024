// server1.js
var http=require('http');

var myServer=http.createServer(function(request,response) {

  response.writeHead(200, {"Content-Type" : "text/html"});
  response.write("<b>hello world!</b>");
  response.end();

});

myServer.listen(3000);
console.log("Type localhost:3000 in your browser...");