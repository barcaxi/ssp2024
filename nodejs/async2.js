fs = require('fs');
 
fs.readdir('c:/', function(err, data){
   console.log(data);
});
console.log("this comes after??");