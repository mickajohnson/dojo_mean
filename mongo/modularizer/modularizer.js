var fs = require("fs")
var path = require("path")


var server = 'var express = require("express");\n var path = require("path");\n var bodyParser = require("body-parser");\n var mongoose = require("mongoose");\n var app = express();\n app.set("views",  path.join(__dirname, "./client/views")); \n app.set("view engine", "ejs");\n app.use(express.static(path.join(__dirname, "./client/static")));\n app.use(bodyParser.json());\n require("./server/config/mongoose.js");\n var routes_setter = require("./server/config/routes.js");\n routes_setter(app);\n app.listen(1998, function(){console.log("listening on port 1998");\n})'

fs.mkdir(path.join(__dirname, "client"), function(err, folder){
  if (err){
    console.log(err);
  }
  else{
    fs.mkdir(path.join(__dirname, "client", "static"), function(err, folder){
        if(err){
          console.log(err);
        }
    });
    fs.mkdir(path.join(__dirname, "client", "views"), function(err, folder){
        if(err){
          console.log(err);
        }
    });
  }
});
fs.mkdir(path.join(__dirname, "server"), function(err, folder){
  if (err){
    console.log(err);
  }
  else{
    fs.mkdir(path.join(__dirname, "server", "config"), function(err, folder){
        if(err){
          console.log(err);
        }
    });
    fs.mkdir(path.join(__dirname, "server", "controllers"), function(err, folder){
        if(err){
          console.log(err);
        }
    });
    fs.mkdir(path.join(__dirname, "server", "models"), function(err, folder){
        if(err){
          console.log(err);
        }
    });
  }
});
fs.writeFile(path.join(__dirname, "server.js"), server, "utf8", function(err){
  if (err){
    console.log(err);
  }
});
//
// console.log(path.join(__dirname, "client", "static"));
