fs = require('fs');

var data=fs.readFileSync('HelloWorld.js', 'utf8'); // read file using utf8 encoding format
console.log(data);