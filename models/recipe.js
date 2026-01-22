const mongoose = require("mongoose");

// Schema
const recipeSchema = new mongoose.Schema({
    // Basic Info
    name: {
        type: String,
        required: true,
        trim: true // remove whitespaces
    },
    description: {
        type: String,
        required: true
    },
    
    // Images
    image: {
        type: String,  // Main image URL
        default: '/images/default-recipe.jpg'
    },
    
    // Time & servings
    prepTime: {
        type: String,
        required: true
    },
    cookTime: {
        type: String,
        required: true
    },
    totalTime: String,
    servings: {
        type: String,
        required: true
    },
    
    // Ingredients (grouped by section)
    ingredientSections: [{
        title: {
            type: String,
            default: "Ingredients"
        },
        items: [{
            type: String,
            required: true
        }]
    }],
    
    // Instructions
    steps: [{
        type: String,
        required: true
    }],
    
    // Tips & notes
    proTip: String,
    notes: [String],
    
    // Storage instructions
    storage: String,
    
    // Recipe Details
    author: {
        type: String,
        default: 'Anonymous'
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
        default: 'Medium'
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    cuisine: String
});

// Model
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;