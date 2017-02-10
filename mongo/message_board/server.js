var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var mongoose = require("mongoose")
var validate = require('mongoose-validator');
var app = express();
app.set('views',  path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "./static")));
app.use(bodyParser.urlencoded({extended:true}))
mongoose.connect('mongodb://localhost/message_board');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var nameValidator = [
  validate({
    validator: 'isAlphanumeric',
    passifEmpty: true,
    message: "Name should contain alpha-numeric characters only"
  })
];

var PostSchema = new mongoose.Schema({
  name: {type: String, required:true, minlength:4},
  message: {type:String, required:true, minlength:2},
  _comments: [{type: Schema.Types.ObjectId, ref:"Comment"}]
}, {timestamps:true});
mongoose.model("Post", PostSchema);
var Post = mongoose.model("Post");

var CommentSchema = new mongoose.Schema({
  name: {type: String, required:true, minlength:4},
  text: {type:String, required:true, minlength:2},
  _post: {type: Schema.Types.ObjectId, ref:"Post"}
}, {timestamps:true});

mongoose.model("Comment", CommentSchema);
var Comment = mongoose.model("Comment");

app.get('/', function(req, res){
  Post.find({}).populate("_comments").exec(function(err, posts){
    if (err){
      console.log(err);
    }
    else {
      res.render('index', {posts:posts})
    }
  });
});

app.post('/', function(req,res){
  var post = new Post(req.body);
  post.save(function(err){
    if(err){
      res.render('index', {title:"You have errors", errors:post.errors})
    }
    else{
      res.redirect('/')
    }
  })
});

app.post('/comment/:id', function(req,res){
  Post.findOne({_id: req.params.id}, function(err, post){
    var comment = new Comment({name:req.body.name, text:req.body.text});
    comment._post = post._id;
    Post.update({_id: post._id}, {$push: {"_comments": comment}}, function(err){

		});
		comment.save(function(err){
			if(err){
				console.log(err);
				res.render('index.ejs', {errors: comment.errors});
			} else {
				console.log("comment added");
				res.redirect("/");
			}
		});
  });
});

app.listen(1998, function(){
  console.log("listening on port 1998");
})
