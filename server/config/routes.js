// customers controller
// orders controller
var bodyParser = require('body-parser');
var customers = require('../controllers/customers.js');
var orders = require('../controllers/orders.js');

module.exports = function(app) {
    app.use(bodyParser.json());

    ///////////////////////
    //  CUSTOMER ROUTES  //
    ///////////////////////
    app.get('/customers/retrieveAll', function(req, res) {
        customers.retrieveAll(req, res);
    });
    app.post('/customers/create', function(req, res) {
        customers.create(req, res);
    });
    app.post('/customers/delete', function(req, res) {
        customers.delete(req, res);
    });
    app.post('/customers/update', function(req, res) {});

    ////////////////////
    //  ORDER ROUTES  //
    ////////////////////
    app.get('/orders/retrieveAll', function(req, res) {
        orders.retrieveAll(req, res);
    })
    app.post('/orders/newOrder', function(req, res) {
        orders.create(req, res);
    })
}