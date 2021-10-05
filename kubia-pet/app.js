const http = require('http');
const { request } = require('https');
const os = require('os');
const fs = require('fs');
var count = 0;

const dataFile = "/var/data/kubia.txt";

var handler = function (req, res) {
    console.log(" Received request from " + req.connection.remoteAddress);

    if (req.method == "POST") {
        var file = fs.createWriteStream(dataFile);
        file.on('open', function (fd) {
            req.pipe(file);
            console.log("New data has been received and stored");
            res.writeHead(200);
            res.end("Data stored on pod" + os.hostname() + "\n");
        })
    } else {
        var data = fs.existsSync(dataFile) ? fs.readFileSync(dataFile, 'utf8') : "No data posted yet";
        res.writeHead(200);
        res.write("You've hit pod " + os.hostname() + "\n");
        res.end("Data stored on this pod: " + data + "\n");
    }
}

var www = http.createServer(handler);
www.listen(8080);