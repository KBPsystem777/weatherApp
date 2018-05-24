const http = require('http');
const fs = require('fs');

const page = fs.readFileSync('index.html');

const port = 8080;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(page);
}).listen(port);
console.log(`Listening on http://localhost:${port}`);