var mongoose = require("mongoose");
var Quote = mongoose.model("Quote");
module.exports = {
  show: function(req, res) {
    Quote.find({}).sort('-createdAt').exec(function(err, quotes){
      if (err){
        console.log(err);
        res.redirect('/')
      }
      else{
        res.render('main', {'quotes':quotes})
      }
    })
  },
  create: function(req, res) {
    var errors = [];
    if (req.body.name === ""){
      errors.push("No value in name field")
    }
    if (req.body.quote === ""){
      errors.push("No value in quote field")
    }
    if (errors.length > 0){
      res.render('errors', {'errors':errors})
    }
    else{
      var quote = new Quote();
      quote.name = req.body.name;
      quote.quote = req.body.quote;
      quote.save(function(err){
        if(err){
          errors.push(err)
          res.render('errors', {'errors':errors})
        }
        else{
          console.log("Quote added");
          res.redirect('/quotes')
        }
      })
    }
  }
}
