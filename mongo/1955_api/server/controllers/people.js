var mongoose = require("mongoose");
var Person = mongoose.model("Person")
module.exports = {
  showAll: function(req, res){
    Person.find({}, function(err, people){
      if (err){
        console.log(err);
      }
      else {
        res.json(people)
      }
    });
  },
  new: function(req, res){
    var person = new Person();
    person.name = req.params.name;
    person.save(function(err){
      if (err){
        console.log(err);
        res.redirect('/');
      }
      else {
        console.log("New Person Created");
        res.redirect('/');
      }
    })
  },
  remove: function(req, res){
    Person.remove({name:req.params.name}, function(err){
      if(err){
        console.log(err);
        res.redirect('/');
      }
      else {
        console.log("Person deleted");
        res.redirect('/');
      }
    })
  },
  showOne: function(req, res){
    Person.findOne({name:req.params.name}, function(err, person){
      if(err){
        console.log(err);
        res.redirect('/');
      }
      else {
        res.json(person)
      }
    })
  },

}
