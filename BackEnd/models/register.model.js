const mongoose = require('mongoose');
const { Schema } = mongoose;

const registerSchema = new Schema({
    name: { type: String, required: true },
    ocupation: { type: String, required: true },
    telephone: { type: Number, required: false },
    dependencie: { type: String, required: true },
    age: { type: Number, required: false },
    email: { type: String, required: true}
})

module.exports = mongoose.model('Reguster', registerSchema);