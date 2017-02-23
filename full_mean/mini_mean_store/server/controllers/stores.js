var mongoose = require('mongoose');
var Customer = mongoose.model('Customer')
var Product = mongoose.model('Product')
var Order = mongoose.model('Order')
module.exports = {
//  index = function(req, res){}
  showCustomers: function(request, response){
    Customer.find({}, function(err, customers){
      if (err){
        response.json({err:err});
      }
      else {
        response.json({customers:customers});
      }
    })
  },
  addCustomer: function(request, response){
    var customer = new Customer({name: request.body.name});
    customer.save(function(err, customer){
      if (err){
        response.json({err:err});
      }
      else {
        response.json({customer:customer});
      }
    });
  },
  removeCustomer: function(request, response){
    Customer.find({_id:request.params.id}).remove().exec(function(err){
      if (err){
        response.json({err:err})
      }
      else {
        response.json({message:"User deleted"})
      }
    });
  },
  showProducts: function(request, response){
    Product.find({}, function(err, products){
      if(err){
        response.json({err: err})
      }
      else{
        response.json({products: products})
      };
    });
  },
  addProduct: function(request, response){
    var product = new Product({name: request.body.name, image: request.body.image, description: request.body.description, quantity: Math.floor(request.body.quantity)})
    product.save(function(err, product){
      if(err){
        response.json({err: err})
      }
      else{
        response.json({product: product})
      };
    });
  },
  addOrder: function(request, response){
    if (!request.body.product || !request.body.customer || !request.body.quantity){
      response.json({err:{errors:"MUST ACTUALLY SELECT EVERYTHING - WHO DO YOU THINK YOU ARE?"}});
      return;
    }
    Product.findOne({name: request.body.product.name}, function(err, product){
      if(err){
        response.json({err: err})
      }
      else{
        if (product.quantity - request.body.quantity < 0){
          response.json({err:{errors:"TOO GREEDY - BUY LESS"}});
          return;
        }
        Customer.findOne({name: request.body.customer.name}, function(err, customer){
          if(err){
            response.json({err: err})
          }
          else{
            var order = new Order({_product: product._id, _customer: customer._id, quantity: request.body.quantity})
            order.save(function(err, order){
              if(err){
                response.json({err: err})
              }
              else{
                product.quantity -= request.body.quantity;
                product.save(function(err, product){
                  if(err){
                    response.json({err: err})
                  }
                  else{
                    response.json({order: order, product: product, customer: customer})
                  }
                })
              }
            })
          }
        })
      }
    })
  },
  showOrders: function(request, response){
    Order.find({}).populate("_product").populate("_customer").exec(function(err, orders){
      if(err){
        response.json({err: err})
      }
      else{
        response.json({orders: orders})
      };
    });
  }
}
