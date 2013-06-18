//we're gonna need the http and the filesystem module to be able to serve things properly
var internet = require("http");
var files = require("fs");

internet.createServer(function(req, res) {
    if(req.url.match(/[A-Za-z0-9\-_]+?\.[a-z]{2,4}$/)) {
        //a file was requested, let's see if it actually exists
        if(files.existsSync("www"+req.url)) {
            //it exists, now we'll check the MIME-type
            if(req.url.match(/\.js$/)) {
                //we've got a script here, time to change the header accordingly
                res.setHeader("Content-Type", "text/javascript");
            } else if(req.url.match(/\.css$/)) {
                //it's a stylesheet, let's tell the browser it's one
                res.setHeader("Content-Type", "text/css");
            } else if(req.url.match(/\.woff$/)) {
                //that's a font, we'll add the appropriate header for it
                res.setHeader("Content-Type", "application/font-woff");
            }
            //and now send the file to the browser
            res.end(files.readFileSync("www"+req.url));
        } else {
            //the file doesn't exist, so we'll let the browser know without giving 'm anything to work with
            res.statusCode = 404;
            res.end();
        }
    } else if(req.method == "GET") {
        //it's not a file that the browser wants, so it probably wants to see the page
        console.log(req.headers);
        res.setHeader("Content-Type", "text/html");
        res.end(files.readFileSync("www/index.html"), "");
    } else {
        //we don't allow POST, by the way; it's an Javascript app
        res.statusCode = 500;
        res.end();
    }
}).listen(process.env.PORT, process.env.IP);
ISO-8859-1