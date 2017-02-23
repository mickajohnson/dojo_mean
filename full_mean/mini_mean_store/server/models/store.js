var mongoose = require('mongoose')

var customerSchema = mongoose.Schema({
  name: {
    type: String,
    minlength: [3, "Customer name must be more than 3 characters you fucking piece of shit"],
    maxlength: [25, "Customer name must be less than 25 characters you fucking piece of shit"],
    required: [true, "The customer needs a fucking name"],
    unique: [true, "That customer already lives "]
  }
},{timestamps: true});

var productSchema = mongoose.Schema({
  name: {
    type: String,
    minlength: [3, "Product name must be more than 3 characters you fucking piece of shit"],
    maxlength: [25, "Product name must be less than 25 characters you fucking piece of shit"],
    required: [true, "The product needs a fucking name"],
    unique: [true, "Name taken"]
  },
  image: {
    type: String,
    required: [true, "The product needs a fucking picture"],
  },
  description: {
    type: String,
    minlength: [3, "Product description must be more than 3 characters you fucking piece of shit"],
    maxlength: [400, "Product description must be less than 400 characters you fucking piece of shit"],
    required: [true, "The product needs a fucking description"],
  },
  quantity: Number,
}, {timestamps:true});

var orderSchema = mongoose.Schema({
  _product: {type: mongoose.Schema.Types.ObjectId, ref:"Product"},
  _customer: {type: mongoose.Schema.Types.ObjectId, ref:"Customer"},
  quantity: Number
}, {timestamps:true});

mongoose.model('Customer', customerSchema);
mongoose.model('Product', productSchema);
mongoose.model('Order', orderSchema);
