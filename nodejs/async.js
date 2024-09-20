fs = require('fs');
 
function printData(err, data) 
{
   console.log(data);
}
 
fs.readdir('c:/', printData);
console.log("this comes after??");