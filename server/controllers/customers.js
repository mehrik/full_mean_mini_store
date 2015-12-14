var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = {
    // retrieve all customers
    retrieveAll: function(req, res) {
        Customer.find({}, function(err, customers) {
            console.log('customers.retreiveAll function successfully called');
            res.json(customers);
        });
    },
    // create new customer
    create: function(req, res) {
        // create new customer with information from the client
        var customer = new Customer({
            name: req.body.name,
        });
        // save customer and check for errors
        customer.save(function(err) {
            if (err) {
                console.log('Errors from customers.create:', err);
            } else {
                console.log('Successfully created new customer');
                // need an empty response so the controller does not
                // hung up on trying to find itself making the 
                // client side slow in loading
                res.json();
            }
        });
    },
    // delete customer
    delete: function(req, res) {
        Customer.remove({ _id: req.body._id }, function(err) {
            if (err) {
                console.log('Errors from customers.delete:', err);
            } else {
                console.log('Successfully deleted a customer');
                // need an empty response so the controller does not
                // hung up on trying to find itself making the 
                // client side slow in loading
                res.json();
            }
        })
    },
    // update customer
    update: function(req, res) {

    }
}