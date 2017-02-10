var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var mongoose = require("mongoose")
var app = express();
app.set('views',  path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "./static")));
app.use(bodyParser.urlencoded({extended:true}))
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
}, {timestamps: true});

mongoose.model("User", UserSchema);

var User = mongoose.model('User')

app.get('/', function(req, res){
  // User.update({name:"Curtis"}, {age:25}, function(err){
  User.find({}, function(err, users){
    if (err){
      console.log(err);
    }
    else{
      res.render('index', {"users":users});
    }
  })
});
app.get('/1955', function(req, res){
  res.render('1955')
})
app.post('/users', function(req, res){
  if (req.body.name == '' || req.body.age == ''){
    console.log("empty field(s)");
    res.redirect('/');
  }
  else{
    var user = new User({name: req.body.name, age:req.body.age});
    user.save(function(err) {
      if (err){
        console.log(err);
      }
      else {
        console.log("Added a user");
        res.redirect('/')
      }

    })
  }
});

app.listen(2004, function(){
  console.log("listening on port 2004");
})
