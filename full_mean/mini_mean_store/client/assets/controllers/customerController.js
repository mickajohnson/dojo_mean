app.controller("customerController", ["$scope", "storeFactory", function($scope, storeFactory){
  function index(data){
    $scope.customers = data.customers;
    $scope.customer = {};
  }

  $scope.addCustomer = function(){
    storeFactory.addCustomer($scope.customer, function(data){
      if(data.err){
        console.log(data);
        if(data.err.code){
          $scope.error = "Name must be unique, idiot";
        }
        else{
          $scope.error = data.err.errors.name.message;
        }
      }
      $scope.showCustomer();
    })
  }
  $scope.showCustomer = function(){
    storeFactory.showCustomer(index)
  }
  $scope.showCustomer();
  $scope.removeCustomer = function(id){
    storeFactory.removeCustomer(id, function(data){
      $scope.showCustomer();
    })
  }
}])
