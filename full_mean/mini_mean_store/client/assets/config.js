var app = angular.module("app", ["ngRoute", "ngCookies"]);
app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: "partials/dashboard.html",
    controller: "storeController"
  })
  .when('/orders', {
    templateUrl: "partials/orders.html",
    controller: "orderController"
  })
  .when('/customers', {
    templateUrl: "partials/customers.html",
    controller: "customerController"
  })
  .when('/products', {
    templateUrl: "partials/products.html",
    controller: "productController"
  })
  .otherwise({
    redirectTo: '/'
  })
})
