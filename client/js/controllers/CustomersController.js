// angular.module('myApp');

myApp.controller('CustomersController', function($scope, CustomerFactory) {
    // Retrieve all customer information from the factory and set it to a 
    // scope variable for use in angular
    $scope.index = function() {
        CustomerFactory.retrieveAllCustomers(function (data) {
            $scope.customers = data;
        });
    }
    // Grab newCustomer information from the partial and send to the factory
    $scope.addNewCustomer = function() {
        CustomerFactory.addCustomer($scope.newCustomer, function() {
            $scope.newCustomer = {};
            $scope.index();
        });
    }
    $scope.removeCustomer = function(customer) {
        CustomerFactory.removeCustomer(customer, function() {
            $scope.index();
        });
    }

    $scope.index();
});