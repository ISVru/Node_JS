const http = require('http'); 
const fs = require('fs'); 
const page = ['header.html', 'body.html', 'footer.html'];
http.createServer((req, res) => {
    let n = '';
    function readFile(arr) {
        if (arr.length === 0) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(n);
        }
        fs.readFile(arr[0], 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 404;
                return res.end('Error of reading file!');
            }
            n += data;
            readFile(arr.slice(1, arr.length));
        });
    }
    readFile(page);
}).listen(8080);
