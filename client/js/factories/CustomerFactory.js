// angular.module('myApp');

myApp.factory('CustomerFactory', function($http) {
    var factory = {};
    var customers = [];

    // Retrieve all customers from the factory/database
    // Then send it to the controller
    factory.retrieveAllCustomers = function(callback) {
        $http.get('/customers/retrieveAll').success(function (output) {
            customers = output;
            callback(customers);
        });
    }
    // Insert new customer into the database
    factory.addCustomer = function (newCustomer, callback) {
        $http.post('/customers/create', newCustomer).success(function(output){
            callback();
        });
    }
    // Remove a customer from the database
    factory.removeCustomer = function(customer, callback) {
        $http.post('/customers/delete', customer).success(function(output){
            callback();
        });
    }

    return factory;
});
