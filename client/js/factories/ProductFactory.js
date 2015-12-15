myApp.factory('ProductFactory', function($http) {
    var factory = {};
    var products = [];

    factory.retrieveAll = function(callback) {
        $http.get('/products/retrieveAll').success(function (output) {
            products = output;
            callback(products);
        });
    }

    factory.addNewProduct = function(newProduct, callback) {
        $http.post('/products/newProduct', newProduct).success(function (output) {
            callback();
        })
    }

    return factory;
});