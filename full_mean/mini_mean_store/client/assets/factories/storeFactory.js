app.factory('storeFactory', ["$http", function($http){
  var factory = {};
  factory.showCustomer = function(callback){
    $http.get('/customers').then(function(data){
      callback(data.data);
    });
  };
  factory.addCustomer = function(customer, callback){
    $http.post('/customers', customer).then(function(data){
      callback(data.data);
    });
  };
  factory.removeCustomer = function(id, callback){
    $http.delete('/customers/' + id).then(function(data){
      callback(data.data);
    });
  };
  factory.showProduct = function(callback){
    $http.get('/products').then(function(data){
      callback(data.data)
    });
  };
  factory.addProduct = function(product, callback){
    $http.post('/products', product).then(function(data){
      callback(data.data)
    });
  };
  factory.newOrder = function(order, callback){
    $http.post('/orders', order).then(function(data){
      callback(data.data);
    })
  }
  factory.showOrder = function(callback){
    $http.get('/orders').then(function(data){
      callback(data.data)
    })
  }
  return factory;
}])
