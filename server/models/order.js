var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new mongoose.Schema({
    _customer: { type: Schema.Types.ObjectId, required: true, ref: 'Customer' },
    // Product will need to be an ObjectId later
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    created_at: { type: Date, default: Date() }
});

var Order = mongoose.model('Order', OrderSchema);