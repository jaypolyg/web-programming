const mongoose = require("mongoose");

// Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true // remove whitespaces
    },

    email: {
        type: String,
        required: true,
        trim: true // remove whitespaces
    },

    password: {
        type: String,
        required: true
    }
});

// Model
const User = mongoose.model('User', userSchema);

module.exports = User;
