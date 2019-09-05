var fs = require('fs');

console.log('Executed before file reading');

var data = fs.readFile('./files/file', 'utf8', function (error, data){

});



  console.log(data);

console.log('Executed after file reading');