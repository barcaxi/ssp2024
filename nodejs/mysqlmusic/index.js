// index.js
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'music'
});

connection.connect();
var query="SELECT * FROM artist";
connection.query(query, function(err, rows) {
  if (err) throw err;
  console.log(JSON.stringify(rows));
  // OR
  for(var i=0;i<rows.length;i++)
    console.log(rows[i].artist_name);
});
connection.end();
