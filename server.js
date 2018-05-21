"use strict";

var http = require('http');
var url  = require('url');

var requestCallback = function(req, res) { 
    console.log("Callback called when user connected to server"); 
    res.writeHead(200,{'Content-Type': 'text/html'});
    var urlObject = url.parse(req.url.toString(), true);
    console.log(req.url.toString());
    res.write('ok');
    return res.end();
};

var httpServer = http.createServer(requestCallback);

httpServer.listen(8080,function(){
    console.log('[INFO] httpServer Listening on *:' + 8080 +"port");
}); 