var mongoose = require("mongoose")

var QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String,
}, {timestamps: true});

mongoose.model("Quote", QuoteSchema);
var Quote = mongoose.model("Quote");
