app.factory("productFactory", function(){
  var factory = {};
  var products = [{name:'Keyboard', price: 149.99, quantity:25},{name:'Mouse', price: 59.99, quantity:13},{name:'Basketball', price: 21.99, quantity:40}]
  factory.index = function(callback){
    callback(products);
  }
  factory.add = function(product, callback){
    product.quantity = 50;
    products.push(product);
    callback(products);
  }
  factory.delete = function(index, callback){
    products.splice(index, 1);
    callback(products)
  }
  factory.buy = function(index, callback){
    if (products[index].quantity > 0){
      products[index].quantity -= 1;
    }
    callback(products);
  }
  return factory;
});
