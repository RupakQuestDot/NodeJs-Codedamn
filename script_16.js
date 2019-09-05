var express = require('express');
var path = require('path');

var app = express();

app.use('/cssFiles', express.static(__dirname+'/assests'));

app.use('/',function(req, resp){
    resp.sendFile('index.html',{root : path.join(__dirname, './files')});
})

app.listen(1337, function() {
    console.log('App is Running At Port : 1337');
});