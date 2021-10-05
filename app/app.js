const http = require('http');
const os = require('os');
var count = 0;

var handler = function(req,res){
    console.log(" Received request from " + req.connection.remoteAddress);
    if(count < 5){
        res.writeHead(200);
        res.end("You've hit " + os.hostname() +" - Current requests: "+ count + "\n");
        count++;
    }else{
        console.log("failing now");
        res.writeHead(500);
        res.end("Error")
    }
}

var www = http.createServer(handler);
www.listen(8080);