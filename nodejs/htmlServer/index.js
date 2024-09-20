// HTMLServer.html
var http = require('http');
var fs = require('fs');
var url = require('url');

var myServer=http.createServer(function(request,response){
  
    // NB:: ignore favicon.ico requests if any
    if (request.url == '/favicon.ico')
        return;

    var q = url.parse(request.url, true);
    var html=fs.readFileSync("." + q.pathname, 'utf8');

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
   
});
 
myServer.listen(3000);
console.log("Server listening on port 3000");