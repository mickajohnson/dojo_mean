var express = require("express")
var path = require('path');
var bodyParser = require("body-parser");
var app = express();
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "./static")));
app.use(bodyParser.urlencoded({extended:true}));



app.get('/', function(request, response) {
  response.render('index');
})

app.post('/users', function(req, res){
  console.log("POST DATA \n\n", req.body);
  res.redirect('/')
});

app.get('/users/:id', function(req,res){
  console.log("The user id requested is:", req.params.id);
  res.send("You requested the user with the id:", req.params.id);
});

app.listen(8000, function(){
  console.log("listening on port 8000")
})
