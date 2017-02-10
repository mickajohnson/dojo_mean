var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var mongoose = require("mongoose")
var validate = require('mongoose-validator')
var app = express();
app.set('views',  path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "./static")));
app.use(bodyParser.urlencoded({extended:true}))
mongoose.connect('mongodb://localhost/cows_dashboard');
mongoose.Promise = global.Promise;

var CowSchema = new mongoose.Schema({
  name: String,
  age: Number,
  type: String,
  living: Boolean
}, {timestamps: true});

mongoose.model("Cow", CowSchema);
var Cow = mongoose.model("Cow")

app.get('/', function(req, res){
  Cow.find({}, function(err, cows){
    if (err){
      console.log(err);
    }
    else{
      res.render('index', {"cows":cows})
    }
  })
});

app.get('/cows/new', function(req, res){
  res.render('new')
});

app.get('/cows/:name/', function(req, res){
  Cow.findOne({name:req.params.name}, function(err, cow){
    if (err){
      console.log(err);
    }
    else {
      res.render('show', {"cow":cow})
    }
  })
});

app.post('/cows', function(req, res){
  if (req.body.name == "" || req.body.age == "" ||req.body.type == "" ||req.body.living == ""){
    console.log("empty field(s)");
    res.redirect('/')
  }
  else{
    var cow = new Cow();
    cow.name = req.body.name;
    cow.age = req.body.age;
    cow.type = req.body.type;
    cow.living = req.body.living;
    cow.save(function(err){
      if(err){
        console.log(err);
      }
      else{
        console.log("cow added");
        var url = "/cows/" + req.body.name
        res.redirect(url)
      }
    })
  }
});

app.get('/cows/edit/:id', function(req, res){
  Cow.findOne({name:req.params.id}, function(err, cow){
    if (err){
      console.log(err);
    }
    else {
      res.render('edit', {"cow":cow});
    }
  })
});

app.post('/cows/:name', function(req, res){
  Cow.update({name:req.params.name}, {name:req.body.name, age:req.body.age, type:req.body.type, living:req.body.living,}, function(err){
    if(err){
      console.log(err);
    }
    else {
      var url = "/cows/" + req.body.name
      res.redirect(url);
    }
  })
});

app.post('/cows/destroy/:name', function(req, res){
  Cow.remove({name:req.params.name}, function(err){
    if(err){
      console.log(err);
    }
    else{
      console.log("Cow successfully deleted");
        res.redirect('/');
    }
  })
});




app.listen(1998, function(){
  console.log("listening on port 1998");
})
