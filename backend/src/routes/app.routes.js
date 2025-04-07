import countries from "../testCountries.js";
import recipesRoutes from "./recipe.routes.js";
import { Router } from "express";

const appRoutes = Router();

appRoutes.use('/countries', (req, res) => res.send(countries))

appRoutes.use("/recipes", recipesRoutes); // domain/recipes

export default appRoutes;
