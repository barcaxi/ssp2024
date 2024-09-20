// addServer.html
var http = require('http');
var url = require('url');

var myServer=http.createServer(function(request,response){
  
    // NB:: ignore favicon.ico requests if any
    if (request.url == '/favicon.ico')
        return;

    var q = url.parse(request.url, true);
    var num1 = q.query.num1;
    var num2 = q.query.num2;
    var ans = parseInt(num1)+parseInt(num2);

    response.writeHead(200, {"Content-Type": "text/text"});
    response.write(`${num1} + ${num2} = ${ans}`);
    response.end();
   
});
 
myServer.listen(3000);
console.log("Server listening on port 3000");