const mongoose = require("mongoose");

// Schema
const reviewSchema = new mongoose.Schema({
    text: String,
    rating: Number,
    image: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    }
});

// Model
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;