//  Serveing Static Files Using Express

var express = require('express');

var app = express();

console.log(__dirname);

app.use('/cssFiles', express.static(__dirname + '/assets'));

app.get('/hiRupak', function (_request, response){
    response.send('Hello There I am Rupak');
});

app.listen(1337, function() {
    console.log('App is Running At Port : 1337');
});