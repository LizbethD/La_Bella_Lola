const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductsSchema  = new Schema({
    name: {type: String, required: true},
    description: {type: String, require: true},
    precio: { type: String, require: true },
});

module.exports = mongoose.model('Product', ProductsSchema);

