var fs = require("fs");
var http = require("http");

var server = http.createServer(function(request, response){
  console.log("client requests URL: ", request.url);
  if (request.url === '/cars'){
    fs.readFile('./views/cars.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    })
  }
  else if (request.url === '/images/car1.jpeg'){
    fs.readFile('./images/car1.jpeg', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'image/jpeg'});
      response.write(contents);
      response.end();
    })
  }
  else if (request.url === '/images/car2.jpeg'){
    fs.readFile('./images/car2.jpeg', function(erros, contents){
      response.writeHead(200, {'Content-Type':'image/jpeg'});
      response.write(contents);
      response.end()
    })
  }
  else if (request.url === '/images/cat1.jpeg'){
    fs.readFile('./images/cat1.jpeg', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'image/jpeg'});
      response.write(contents);
      response.end();
    })
  }
  else if (request.url === '/images/cat2.jpeg'){
    fs.readFile('./images/cat2.jpeg', function(erros, contents){
      response.writeHead(200, {'Content-Type':'image/jpeg'});
      response.write(contents);
      response.end()
    })
  }
  else if (request.url === '/favicon.ico'){
    fs.readFile('./images/cat1.jpeg', function(erros, contents){
      response.writeHead(200, {'Content-Type':'image/jpeg'});
      response.write(contents);
      response.end()
    })
  }
  else if (request.url === '/cars/new'){
    fs.readFile('./views/new_car.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    })
  }
  else if (request.url === '/cats'){
    fs.readFile('./views/cats.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end()
    })
  }
  else if (request.url === '/stylesheets/styles.css'){
    fs.readFile('./stylesheets/styles.css', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/css'});
      response.write(contents);
      response.end();
    })
  }
  else{
    response.writeHead(400);
    response.end("File not found")
  }
});
server.listen(7077)
console.log("Running in localhost at post 7077")
