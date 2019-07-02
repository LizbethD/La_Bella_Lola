const mongoose = require('mongoose');
const { Schema } = mongoose;

const ServicesSchema  = new Schema({
    paquete: {type: String, required: true},
    cantidad: {type: String, require: true},
    date: { type: String, require: true },
    direction: {type: String, required: true}
});

module.exports = mongoose.model('Service', ServicesSchema);

