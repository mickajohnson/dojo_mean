app.controller("productController", ["$scope", "storeFactory", function($scope, storeFactory){
  function index(data){
    $scope.products = data.products;
    $scope.product = {};
  }
  $scope.showAll = function(){
    $scope.all = true;
  }

  $scope.addProduct = function(){
    storeFactory.addProduct($scope.product, function(data){
      console.log(data.err);
      if(data.err){
        $scope.errors = [];
        if(data.err.code){
          $scope.errors.push("Name must be unique, idiot");
        }
        else{
          for (var key in data.err.errors){
            console.log(key);
            $scope.errors.push(data.err.errors[key].message)
          }
        }
      }
      $scope.showProduct();
    })
  }
  $scope.showProduct = function(){
    storeFactory.showProduct(index)
  }
  $scope.showProduct();
}])
