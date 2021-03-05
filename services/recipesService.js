const recipesModel = require('../models/recipesModel');

const getAll = async () => recipesModel.getAll();

const getByRecipeName = async (name) => recipesModel.getByRecipeName(name);

const getById = async (id) => { 
  if (id.length < 12) return { error: true, code: 'not_found', message: 'recipe not found' };
  const recipe = await recipesModel.getById(id);
  if (recipe === null) {
    return { error: true, code: 'not_found', message: 'recipe not found' };
  }
  return recipe;
};

const create = async ({ name, ingredients, preparation }) => {
  if (!name || !ingredients || !preparation) {
    return { error: true, code: 'bad_request', message: 'Invalid entries. Try again.' };
  }
  const user = await recipesModel.create({ name, ingredients, preparation });
  return user;
};

module.exports = { create, getAll, getByRecipeName, getById };