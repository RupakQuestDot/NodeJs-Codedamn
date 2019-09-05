var express = require('express');
var path = require('path');

var app = express();

console.log(__dirname);

app.use('/cssFiles', express.static(__dirname+'/assests'));

app.get('/',function(req, resp){
    var response = "Hello !" + req.query.firstname;
    resp.end(response);
})



app.listen(1337, function() {
    console.log('App is Running At Port : 1337');
});