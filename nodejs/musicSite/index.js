// index.js
var http = require("http");
var mysql = require('mysql');
var url = require('url');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'music'
});

// this allows request from web browser.  More later about this.
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    'Content-Type': 'text/json'
};

connection.connect();
var myServer = http.createServer(function(request, response) {

    var q = url.parse(request.url, true);
    var page=q.query.page;
    var query;

    switch(page)
    {
        // http://localhost:3000/?page=artist
        case "artist": query="SELECT * FROM artist";
                        break;
                        
        // http://localhost:3000/?page=album
        case "album":   // provide missing code
                        // ...
                        break;

        // http://localhost:3000/?page=albumFilter&artist_id=1
        case "albumFilter": // provide missing code
                            // ...
                            break;
        
        default: query="SHOW TABLES";
                        break;

    }    
    connection.query(query, function(err, rows) {
        if (err) throw err;

        response.writeHead(200, headers);
        response.write(JSON.stringify(rows));
        response.end();

    });
});
  
myServer.listen(3000);
console.log("Server listening on port 3000");
