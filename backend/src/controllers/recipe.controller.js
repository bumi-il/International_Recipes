import Recipe from '../models/Recipe.js';

export const getAllRecipes = async (req, res, next) => {
    try {
        const recipes = await Recipe.find();

        return res.status(200).json({ success: true, message: recipes });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error });
    }
};

export const getRecipeById = async (req, res, next) => {
    try {
        const recipe = await Recipe.findOne({ id: req.params.recipeId });
        if (!recipe) {
            return res
                .status(404)
                .json({ success: false, message: 'Recipe not found' });
        }

        return res.status(200).json({ success: true, message: recipe });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error });
    }
};

export const newRecipe = async (req, res, next) => {
    try {
        const recipe = new Recipe(req.body);
        await recipe.save();
        return res.status(201).json({ success: true, message: recipe });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error });
    }
};

export const deleteRecipe = async (req, res, next) => {
    try {
        const recipe = await Recipe.findOneAndDelete({
            id: req.params.recipeId,
        });
        if (!recipe) {
            return res
                .status(404)
                .json({ success: false, message: 'Recipe not found' });
        }
        return res.status(200).json({ success: true, message: recipe });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error });
    }
};

export const updateRecipe = async (req, res, next) => {
    try {
        const recipe = await Recipe.findOneAndUpdate(
            { id: req.params.recipeId },
            req.body
        );
        if (!recipe) {
            return res
                .status(404)
                .json({ success: false, message: 'Recipe not found' });
        }
        return res.status(200).json({ success: true, message: recipe });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error });
    }
};
