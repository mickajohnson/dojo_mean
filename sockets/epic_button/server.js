var express = require('express');
var path = require('path');
var app = express();
app.set('views',  path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "./bower_components")));
app.use(express.static(path.join(__dirname, "./static")));


app.get('/', function(req, res){
  res.render('index');
})

var server = app.listen(8000, function(){
  console.log("listening on port 8000");
})
var io = require('socket.io').listen(server);

var clicked = 0;

io.sockets.on("connection", function(socket){
  socket.emit("clicked", {clicked:clicked})
  console.log("Socket running");
  socket.on("epic_button", function(){
    clicked++;
    io.emit("clicked", {clicked:clicked});
  })
  socket.on("epic_button", function(){
    clicked++;
    io.emit("clicked", {clicked:clicked});
  })
  socket.on("reset", function(){
    clicked = 0;
    io.emit("clicked", {clicked:clicked});
  })
});
