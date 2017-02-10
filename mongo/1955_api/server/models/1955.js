var mongoose = require("mongoose");

var PersonSchema = new mongoose.Schema({
  name: String
});

mongoose.model("Person", PersonSchema);
var Person = mongoose.model("Person")
