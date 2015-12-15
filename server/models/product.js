var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4 },
    image: { type: String, required: true, minlength: 8 },
    description: { type: String, required: true, minlength: 1 },
    quantity: { type: Number, required: true, min: 1 }
});

var Product = mongoose.model('Product', ProductSchema);