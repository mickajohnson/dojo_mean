var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var mongoose = require("mongoose")
var app = express();
app.set('views',  path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "./client/static")));
app.use(bodyParser.urlencoded({extended:true}))

require("./server/config/mongoose.js")

var routes_setter = require('./server/config/routes.js')
routes_setter(app);

app.listen(1998, function(){
  console.log("listening on port 1998");
})
