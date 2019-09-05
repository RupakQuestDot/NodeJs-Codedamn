var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();

console.log(__dirname);

app.use('/cssFiles', express.static(__dirname+'/assests'));

app.get('/',function(req, resp){
    resp.sendFile('index.html',{root : path.join(__dirname, './files')});
})

app.get(/^(.+)$/, function (req, resp){
    console.log(req.params);
    try {
        if(fs.statSync(path.join(__dirname, './files', req.params[0]+ '.html')).isFile()){
            resp.sendFile(req.params[0]+'.html', {root : path.join(__dirname, './files')});
        }
    } catch (err){
        resp.sendFile('404.html', {root : path.join(__dirname, './files')});
    }
    
})

app.listen(1337, function() {
    console.log('App is Running At Port : 1337');
});