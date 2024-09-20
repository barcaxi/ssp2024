// server3.js
var http=require('http');
var fs=require('fs');
 
var myServer=http.createServer(function(request,response) {
    response.writeHead(200, {"Content-Type" : "text/html"});
    var html=fs.readFileSync('demo.html', 'utf8');
    response.write(html);
    response.end();
});
 
myServer.listen(5000);
console.log("Type: localhost:3000 in your browser...");