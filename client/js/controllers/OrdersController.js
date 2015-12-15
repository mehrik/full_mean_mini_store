// Importing CustomerFactory to be able to display people;
myApp.controller('OrdersController', function($scope, OrderFactory, CustomerFactory, ProductFactory) {
    $scope.index = function() {
        // grab all orders
        OrderFactory.retrieveAllOrders(function (orders) {
            $scope.orders = orders;
            console.log('Here are the orders:', orders);
        });
        // grab all customers
        CustomerFactory.retrieveAllCustomers(function (customers) {
            $scope.customers = customers;
        });
        ProductFactory.retrieveAll(function (products) {
            $scope.products = products;
        });

    }
    $scope.addNewOrder = function() {
        console.log('New Order Created!', $scope.newOrder);
        OrderFactory.addNewOrder($scope.newOrder, function() {
            ProductFactory.updateProduct($scope.newOrder, function() {
                $scope.newOrder = {};
                $scope.index();
            });
        });
    }
    $scope.index();
})