import { Router } from 'express';
import {
    getAllRecipes,
    getRecipeById,
    newRecipe,
} from '../controllers/recipe.controller.js';

const recipesRouter = Router();

recipesRouter.get('/', getAllRecipes);
recipesRouter.get('/recipeId', getRecipeById);
recipesRouter.post('/', newRecipe);

export default recipesRouter;
