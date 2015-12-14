// customers controller
// orders controller
var bodyParser = require('body-parser');
var customers = require('../controllers/customers.js');

module.exports = function(app) {
    app.use(bodyParser.json());

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
}