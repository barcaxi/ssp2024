var http = require("http");
var mysql = require('mysql');

// setup the MySQL connection data
var connection = mysql.createConnection({
    // ...
    // ...
    // ...
});
  
// make MySQL server connection
connection.connect();

var myServer = http.createServer(function(request, response) {
    
    // provide query to run
    // var query=...
    
    // run the query using the connection 
    connection.query(...) {
        if (err) throw err;

        // send a JSON header
        response.writeHead(...);

        // send the rows
        // ...
        response.end();
    });
   
});
 
myServer.listen(3000);
console.log("Server listening on port 3000");
