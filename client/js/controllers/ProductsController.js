myApp.controller('ProductsController', function($scope, ProductFactory) {
    $scope.index = function() {
        ProductFactory.retrieveAll(function (data) {
            $scope.products = data;
            console.log('Scope.products', $scope.products, data);
        })
    }
    $scope.addNewProduct = function() {
        console.log($scope.newProduct)
        ProductFactory.addNewProduct($scope.newProduct, function() {
            $scope.newProduct = {};
            $scope.index();
        })
    }
    $scope.index();
});