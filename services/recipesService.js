const {
  insertRecipe,
  getAllRecipes,
  getRecipe,
  putRecipe,
  deleteRecipe,
} = require('../models/recipesModels');

const {
  validateName,
  verifyRecipe,

} = require('../middleware/validates/validate');

const { authoAdm } = require('../middleware/AuthoAdm');

const postBarRecipe = async (recipe) => {
  validateName(recipe.name);
  validateName(recipe.preparation);
  validateName(recipe.ingredients);
  const result = await insertRecipe(recipe);
  return result;
};

const getBar = async () => {
  const result = await getAllRecipes();
  return result;
};

const getBarId = async (id) => {
  verifyRecipe(id);
  const result = await getRecipe(id);
  console.log('resultado do service:', result);
  return result;
};

const putBarId = async (id, upRecipe, role, idUser) => {
  // authoAdm(role, idUser, id);
  const result = await putRecipe(id, upRecipe);
  return result;
};

const deleteBarId = async (id) => {
  const result = await deleteRecipe(id);
  return result;
};

module.exports = {
  getBar,
  getBarId,
  postBarRecipe,
  putBarId,
  deleteBarId,
};