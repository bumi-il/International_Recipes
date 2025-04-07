import mongoose from 'mongoose';

const countrySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    lat: {
        type: Number,
        required: true,
    },
    lng: {
        type: Number,
        required: true,
    },
    flag: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    capital: {
        type: String,
        required: true,
    },
});

const recipeDetailSchema = new mongoose.Schema({
    ingredients: {
        type: [String],
        required: true,
    },
    steps: {
        type: [String],
        required: true,
    },
});

const recipeSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    mainImage: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    country: {
        type: countrySchema,
        required: true,
    },
    recipe: {
        type: recipeDetailSchema,
        required: true,
    },
});

export default mongoose.model('Recipe', recipeSchema);
