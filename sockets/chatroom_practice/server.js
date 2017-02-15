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
var users = [];
io.sockets.on("connection", function(socket){
  socket.on("got_new_user", function(data){
    users.push({name:data.name, id:socket.id});
    socket.broadcast.emit("new_user", {name:data.name, id:socket.id});
    socket.emit("show_users", {users:users})
  });
  socket.on("disconnect", function(){
    console.log("disconnected");
    socket.broadcast.emit("hide_user", {id:socket.id})
  });
});
