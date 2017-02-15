var mongoose = require("mongoose")

var MessageSchema = new mongoose.Schema({
  name: String,
  message: String,
}, {timestamps: true});

mongoose.model("Message", MessageSchema);
var Message = mongoose.model("Message")
