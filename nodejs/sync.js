fs = require('fs');
 
data = fs.readdirSync('c:/');
console.log(data);
console.log("this comes after data");