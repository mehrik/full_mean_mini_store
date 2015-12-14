// initialize angular module
var myApp = angular.module('myApp', ['ngRoute']);
// configuration for angular routes

myApp.config(function ($routeProvider) {
    // customers, products, dashboard
    $routeProvider
        .when('/', {
            redirectTo: '/dashboard'
        })
        .when('/dashboard', {
            templateUrl: 'views/partials/dashboard.html'
        })
        .when('/products', {
            templateUrl: 'views/partials/products.html'
        })
        .when('/orders', {
            templateUrl: 'views/partials/orders.html',
            controller: 'OrdersController'
        })
        .when('/customers', {
            templateUrl: 'views/partials/customers.html',
            controller: 'CustomersController'
        })
        .otherwise({
            redirectTo: '/'
        })
});