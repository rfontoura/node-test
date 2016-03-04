var http = require('http');
var fs = require('fs');

//var data = fs.readFileSync('input.txt');
fs.readFile('input.txt', function(err, data) {
    if (err) {
        return console.error(err);
    }
    
    console.log(data.toString());
});
console.log('Programa finalizado.');

function servidorHttp(http) {
    http.createServer(function(req, resp) {
        resp.writeHead(200, {'Content-Type' : 'text/plain'});
        resp.end('Olá, Dog!\n');
    }).listen(8081);

    console.log('Listening on http://127.0.0.1:8081/');
}