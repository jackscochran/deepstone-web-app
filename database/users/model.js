const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        requred: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    config: {
        type: Map,
        required: true,
        default: {}
    }
});

// create and export model
const User = mongoose.model('user', UserSchema);
module.exports = User;