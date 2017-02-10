var _ = require('underscore')
module.exports = function Route(app) {

  var DB = {
    "users": [
      {"id":0, "name":"Mick"},
      {"id":1, "name":"Lil B"},
      {"id":2, "name":"Curtis"},
    ],
    "posts": [
      {"id":0, "post":"Hello"},
      {"id":1, "post":"Something interesting"},
      {"id":2, "post":"What is up?"},
    ],
    "foods": [
      {"id":0, "food":"pizza", "calories": -21},
      {"id":1, "food":"steak", "calories": 43},
      {"id":2, "food":"yogurt", "calories":15},
    ]
  }

  app.get('/', function(req, res){
    res.json(DB);
  });
  app.get('/:key', function(req, res){
    var key = req.params.key
    res.json(DB[key])
  });
  app.get('/:key/:id', function(req, res){
    var key = req.params.key
    var id = req.params.id
    res.json(DB[key][id])
  });
  app.post('/:key', function(req, res){
    var name = req.body.name

    var key = req.params.key
    var id = DB[key].length
    DB[key].push({"id": id, "name":name})
    res.redirect('/')
  });
  app.put('/:key/:id', function(req, res){
    var key = req.params.key
    var id = req.params.id
    var toUpdate = _.find(DB[key], function(obj){return obj.id = id})
    var toUpdate = _.indexOf(toUpdate)
    // for (var x in request.body){
    //   DB[key][toUpdate].request
    }
  });
  app.delete('/:key/:id', function(req, res){
    var key = req.params.key
    var id = req.params.id
    var toDelete = _.find(DB[key], function(obj){return obj.id = id})
    var toDelete = _.indexOf(toDelete)
    DB[key].splice(toDelete, 1)
    res.redirect('/')
  })
};
