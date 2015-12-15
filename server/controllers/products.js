var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
    // Retrieve all products
    retrieveAll: function(req, res) {
        Product.find({}, function(err, products) {
            if (err) {
                console.log('Errors from products.retrieveAll', err);
                res.json(err);
            } else {
                console.log('Successfully retrieved products');
                res.json(products);
            }
        })
    },
    // Create a product
    newProduct: function(req, res) {
        var product = new Product({
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
            quantity: req.body.quantity
        });

        product.save(function(err) {
            if (err) {
                console.log('Errors from products.newProduct', err);
                res.json(err);
            } else {
                console.log('Successfully saved new product');
                res.json();
            }
        })
    },

    updateProduct: function(req, res) {
        console.log('############################');
        var product_id = req.body.product._id;
        var quantity = req.body.quantity;
        Product.findOne({ _id: product_id }, function(err, product) {
            if (err) {
                console.log('Errors from products.updateProduct', err);
                res.json(err);
            } else {
                product.quantity -= quantity;
                product.save(function(err) {
                    if (err) {
                        console.log('Errors while saving from products.updateProduct', err);
                        res.json(err);
                    } else {
                        console.log('You did it!');
                        res.json();
                    }
                });
            }
        });
    }
}