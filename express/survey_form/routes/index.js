module.exports = function Route(app){

  app.get('/', function(req, res){
    var locations = ["Chicago", "NYC", "Seattle"];
    var languages = ["Python", "Ruby", "Javascript"];
    res.render('index', {'locations':locations, "languages":languages});
  });

  app.post('/result', function(req, res){
    req.session.name = req.body.name;
    req.session.language = req.body.language;
    req.session.location = req.body.location;
    req.session.comment = req.body.comment;
    res.redirect('/result')
  });

  app.get('/result', function(req, res){
    res.render('results', {"name":req.session.name, "language":req.session.language, "location":req.session.location, "comment":req.session.comment});
  });
};
