var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var minLength = [2, "Name must be 2 characters or more!"];

CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: minLength },
    created_at: { type: Date, default: Date.now }
});

var Customer = mongoose.model('Customer', CustomerSchema);