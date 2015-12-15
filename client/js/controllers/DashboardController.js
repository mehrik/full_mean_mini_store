myApp.controller('DashboardController', function($scope, CustomerFactory, OrderFactory, ProductFactory) {
    $scope.index = function() {
        CustomerFactory.retrieveAllCustomers(function (customers) {
            $scope.customers = customers;
        });
        OrderFactory.retrieveAllOrders(function (orders) {
            $scope.orders = orders;
        });
        ProductFactory.retrieveAll(function (products) {
            $scope.products = products;
        });
    }
    $scope.index();
});