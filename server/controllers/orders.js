var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = {
    // retrieve all orders and POPULATE _customer, since _customer is an object
    retrieveAll: function(req, res) {
        Order.find({})
        .populate('_customer')
        .exec(function(err, orders) {
            if (err) {
                console.log('Errors from orders.retrieveAll', err);
            } else {
                console.log('Successfull added order', orders);
                res.json(orders);
            }
        })
    },
    // create new order
    create: function(req, res) {
        // Create new order from information from client
        var order = new Order({
            _customer: req.body.customer._id,
            // Product will have to be an ObjectId later
            product: req.body.product.name,
            quantity: req.body.quantity
        });
        // Save the order and check for errors
        order.save(function(err) {
            if (err) {
                console.log('Errors from orders.create', err);
                res.json(err);
            } else {
                console.log('Successfully created order!');
                res.json();
            }
        })
    },
    // delete order
    // update order
}