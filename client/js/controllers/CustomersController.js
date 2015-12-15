// angular.module('myApp');

myApp.controller('CustomersController', function($scope, CustomerFactory) {
    // Retrieve all customer information from the factory and set it to a 
    // scope variable for use in angular
    $scope.index = function() {
        CustomerFactory.retrieveAllCustomers(function (data) {
            $scope.customers = data;
            console.log(data);
        });
    }
    // Grab newCustomer information from the partial and send to the factory
    $scope.addNewCustomer = function() {
        $scope.errors = false;
        CustomerFactory.addCustomer($scope.newCustomer, function(error) {
            if(error) {
                $scope.errors = error;
            } else {
                $scope.newCustomer = {};
                $scope.index();
            }
        });
    }
    $scope.removeCustomer = function(customer) {
        CustomerFactory.removeCustomer(customer, function() {
            $scope.index();
        });
    }
    $scope.index();
});