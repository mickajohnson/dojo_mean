var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var session = require('express-session');
var app = express();
app.set('views',  path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "./static")));
app.use(bodyParser.urlencoded({extended:true}))

var route = require('./routes/index.js')(app)

var server = app.listen(8000, function(){
  console.log("listening on port 8000");
})
var io = require('socket.io').listen(server);

io.sockets.on("connection", function(socket){
  console.log("Socket running");
  socket.on("posting_form", function(data){
    var message = "<p>You emmitted the following information to the server: \n Name: " + data.name + "\nLocation: " + data.location + "\n Language: " + data.language + "\n Comment: " + data.comment + "</p>"
    socket.emit("updated_message", {message: message})
    var lucky_message = "Your lucky server number is " + Math.trunc((Math.random()*1000)+ 1)
    socket.emit("random_number", {message:lucky_message});
  })
});
