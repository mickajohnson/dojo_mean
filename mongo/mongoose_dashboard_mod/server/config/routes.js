var cows = require('../controllers/cows.js')
module.exports = function(app){
  app.get('/', function(req, res){
    cows.show_all(req, res);
  });
  app.get('/cows/new', function(req, res){
    res.render('new')
  });

  app.get('/cows/:name/', function(req, res){
    cows.show_one(req, res);
  });

  app.post('/cows', function(req, res){
      cows.create(req, res);
  });

  app.get('/cows/edit/:id', function(req, res){
    cows.edit(req,res);
  });

  app.post('/cows/:name', function(req, res){
    cows.update(req,res)
  });

  app.post('/cows/destroy/:name', function(req, res){
    cows.destroy(req,res)
  });
}
