var fs = require('fs');
var http = require('http');
var file = 'database.json';
var server = http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'application/json'});
  fs.createReadStream(file, 'utf8').pipe(response);
  console.log(file);
});
server.listen(8090);
console.log("server running on localhost port 8090");
