var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var app = express();
var _ = require('underscore')
app.set('views',  path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "./static")));
app.use(bodyParser.urlencoded({extended:true}))

var route = require('./routes/index.js')(app)

app.listen(1998, function(){
  console.log("listening on port 1998");
})
