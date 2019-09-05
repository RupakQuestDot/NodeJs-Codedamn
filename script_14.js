var express = require('express');

var app = express();

app.get('/hiRupak', function (requuest, response){
    response.send('Hello There I am Rupak');
});

app.listen(1337, function() {
    console.log('App is Running At Port : 1337');
});