var mongoose = require("mongoose");

var CowSchema = new mongoose.Schema({
  name: String,
  age: Number,
  type: String,
  living: Boolean
}, {timestamps: true});

mongoose.model("Cow", CowSchema);
var Cow = mongoose.model("Cow")
