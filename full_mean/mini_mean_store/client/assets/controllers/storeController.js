app.controller("storeController", ["$scope", "storeFactory", function($scope, storeFactory){
  function customerIndex(data){
    $scope.customers = data.customers;
  }
  function productIndex(data){
    $scope.products = data.products;
  }
  function orderIndex(data){
    $scope.orders = data.orders;
    $scope.order = {}
  }
  $scope.showOrder = function(){
    storeFactory.showOrder(orderIndex)
  }
  $scope.showOrder();
  $scope.showCustomer = function(){
    storeFactory.showCustomer(customerIndex)
  }
  $scope.showCustomer();
  $scope.showProduct = function(){
    storeFactory.showProduct(productIndex)
  }
  $scope.showProduct();
}])
