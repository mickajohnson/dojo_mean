module.exports = function Route(app){

  app.get('/', function(req, res){
    var locations = ["Chicago", "NYC", "Seattle"];
    var languages = ["Python", "Ruby", "Javascript"];
    res.render('index', {'locations':locations, "languages":languages});
  });

};
