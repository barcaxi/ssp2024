// server2.js
var http=require('http');
 
var myServer=http.createServer(function(request,response) {
 
  response.writeHead(200, {"Content-Type" : "text/html"});
  response.write(`
                 <html>
                 <body>
                 <h1>Home Page</h1>
                 <p>Hello world...</p>
                 </body>
                 </html>
                `);
  response.end();
});
 
myServer.listen(3000);
console.log("Type: localhost:3000 in your browser...");