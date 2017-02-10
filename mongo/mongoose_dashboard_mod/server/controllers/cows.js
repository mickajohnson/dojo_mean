var mongoose = require("mongoose")
var Cow = mongoose.model("Cow");
module.exports = {
  show_all: function(req, res){
    Cow.find({}, function(err, cows){
      if (err){
        console.log(err);
      }
      else{
        res.render('index', {"cows":cows})
      }
    })
  },
  show_one: function(req, res){
    Cow.findOne({name:req.params.name}, function(err, cow){
      if (err){
        console.log(err);
      }
      else {
        res.render('show', {"cow":cow})
      }
    })
  },
  create: function(req,res){
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
  },
  edit: function(req, res){
    Cow.findOne({name:req.params.id}, function(err, cow){
      if (err){
        console.log(err);
      }
      else {
        res.render('edit', {"cow":cow});
      }
    })
  },
  update: function(req,res){
    Cow.update({name:req.params.name}, {name:req.body.name, age:req.body.age, type:req.body.type, living:req.body.living,}, function(err){
      if(err){
        console.log(err);
      }
      else {
        var url = "/cows/" + req.body.name
        res.redirect(url);
      }
    })
  },
  destroy: function(req,res){
    Cow.remove({name:req.params.name}, function(err){
      if(err){
        console.log(err);
      }
      else{
        console.log("Cow successfully deleted");
          res.redirect('/');
      }
    })
  }
}
