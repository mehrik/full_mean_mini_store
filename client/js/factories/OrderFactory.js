myApp.factory('OrderFactory', function($http) {
    var factory = {};
    var orders = [];

    factory.retrieveAllOrders = function(callback) {
        $http.get('/orders/retrieveAll').success(function (output) {
            orders = output;
            callback(orders);
        });
    }
    factory.addNewOrder = function(newOrder, callback) {
        $http.post('/orders/newOrder', newOrder).success(function (output) {
            callback();
            if(output) { console.log('output from OrderFactor.addNewOrder', output) }
        });
    }

    return factory;
})