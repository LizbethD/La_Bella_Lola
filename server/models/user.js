const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsersSchema  = new Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, require: true},
    address: { type: String, require: true },
    phone: {type: Number, required: true},
    e_mail: { type: String, require: true },
    perfil: { type: String, require: true }
});

module.exports = mongoose.model('User', UsersSchema);
