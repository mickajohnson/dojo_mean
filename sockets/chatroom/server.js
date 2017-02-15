var express = require('express');
var path = require('path');
var app = express();
app.set('views',  path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "./bower_components")));
app.use(express.static(path.join(__dirname, "./client/static")));
require("./server/config/mongoose.js")
var mongoose = require("mongoose");
var Message = mongoose.model("Message");

app.get('/', function(req, res){
  res.render('index');
})

var server = app.listen(8000, function(){
  console.log("listening on port 8000");
})
var io = require('socket.io').listen(server);
users = {};
io.sockets.on("connection", function(socket){
  socket.on("got_new_user", function(data){
    users[socket.id] = data.name;
    socket.broadcast.emit("new_user", {name: data.name})
    Message.find({}).sort('id').exec(function(err, messages){
      if(err){
        console.log(err);
      }
      else{
        console.log(messages);
        socket.emit("show_messages", {messages: messages})
      }
    })
  });
  socket.on("got_new_message", function(data){
    var message = new Message();
    message.message = data.message;
    message.name = users[socket.id];
    message.save(function(err){
      if (err){
        console.log(err);
      }
      else{
        io.emit("new_message", {message:message})
      }
    })
  });
  socket.on("disconnect" ,function(){
    socket.broadcast.emit("user_disconnect", {name: users[socket.id]})
    delete users[socket.id];
  })
});
