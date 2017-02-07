var http = require('http')
var fs = require('fs')
var server = http.createServer(function(request, response){
  console.log('client request URL:', request.url);
  if (request.url === '/'){
    fs.readFile('index.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    })
  }
  else if (request.url === '/dojo/new'){
    fs.readFile('dojo.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    })
  }
  else if (request.url === '/ninjas'){
    fs.readFile('ninjas.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    })
  }
  else if (request.url === '/css/styles.css'){
    fs.readFile('./css/styles.css', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/css'});
      response.write(contents);
      response.end();
    })
  }
  else if (request.url === '/js/main.js'){
    fs.readFile('./css/styles.css', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/css'});
      response.write(contents);
      response.end();
    })
  }
  else{
    response.writeHead(404);
    response.end('File not found!')
  }
});

server.listen(6789);
console.log("Running in localhost at post 6789")
