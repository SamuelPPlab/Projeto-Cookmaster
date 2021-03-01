const rescue = require('express-rescue');
const { RecipesService } = require('../services');

const SUCCESS = 200;
const CREATED = 201;

const registerNewRecipe = rescue(async (req, res) => {
  const { name, ingredients, preparation } = req.body;

  const newRecipe = await RecipesService.registerNewRecipe(name, ingredients, preparation);

  res
    .status(CREATED)
    .json(newRecipe);
});

const listAllRecipes = rescue(async (_req, res) => {
  const allRecipes = await RecipesService.listAllRecipes();

  return res
    .status(SUCCESS)
    .json(allRecipes);
});

const listRecipeById = rescue(async (req, res) => {
  const { id } = req.params;

  const recipeById = await RecipesService.listRecipeById(id);

  res
    .status(SUCCESS)
    .json(recipeById);
});

module.exports = {
  registerNewRecipe,
  listAllRecipes,
  listRecipeById,
};