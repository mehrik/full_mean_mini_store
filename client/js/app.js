// initialize angular module
var myApp = angular.module('myApp', ['ngRoute', 'angularMoment', 'ngMessages']);
// configuration for angular routes

myApp.config(function ($routeProvider) {
    // customers, products, dashboard
    $routeProvider
        .when('/', {
            redirectTo: '/dashboard'
        })
        .when('/dashboard', {
            templateUrl: 'views/partials/dashboard.html',
            controller: 'DashboardController'
        })
        .when('/products', {
            templateUrl: 'views/partials/products.html',
            controller: 'ProductsController'
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