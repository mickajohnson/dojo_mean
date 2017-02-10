var people = require('../controllers/people.js')
module.exports = function(app){
  app.get('/', function(req, res){
    people.showAll(req, res);
  });
  app.get('/new/:name', function(req, res){
    people.new(req, res);
  });
  app.get('/remove/:name', function(req, res){
    people.remove(req, res);
  });
  app.get('/:name', function(req, res){
    people.showOne(req, res);
  });

}
