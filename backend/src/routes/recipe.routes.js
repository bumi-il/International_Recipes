import { Router } from 'express';
import {
    getAllRecipes,
    getRecipeById,
    newRecipe,
} from '../controllers/recipe.controller.js';
import multer from 'multer';

const upload = multer({ dest: 'src/data/uploads' });

const recipesRouter = Router();

recipesRouter.get('/', getAllRecipes);
recipesRouter.get('/recipeId', getRecipeById);
recipesRouter.post('/', newRecipe);

recipesRouter.post('/test', upload.single('mainImage'));

export default recipesRouter;
