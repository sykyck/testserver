"use strict";

var http = require('http');

var staticServe = function(req, res) { 
    console.log("Request listener called of createServer"); 
    res.statusCode = 200;
    res.write('ok');
    return res.end();
};

var httpServer = http.createServer(staticServe);

httpServer.listen(8080,function(){
    console.log('[INFO] httpServer Listening on *:' + 8080 +"port");
}); 