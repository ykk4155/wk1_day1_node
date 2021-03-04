const http = require ('http');
const path = require('path');
const hostname = 'localhost';
const port = 5000;

const server = http.createServer((req, res) => {
    if
        (req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<html><body><h1>Home Page.</h1></body></html>");
        res.end(`<html><body><h1>Error 404:${fileUrl} not found</h1></body></html>`);
        return;
    }
    else if (req.url === '/about') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<html><body><h1>About us page</h1></body></html>");
    }
    else if (req.url === '/contact') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<html><body><h1>Contact page</h1></body></html>");
    }

    else {
        console.log(`invalid`);
    }
});
   server.listen(port, hostname, () => {
    console.log(`Nodejs at 5000 port is running at ${port}...`);
});