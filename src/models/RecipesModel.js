const { ObjectId } = require('mongodb');
const connection = require('./connection');

const registerNewRecipe = async (name, ingredients, preparation) => {
  const { insertedId } = await connection()
    .then((db) => db.collection('recipes')
      .insertOne({ name, ingredients, preparation }));

  return {
    recipe: {
      name,
      ingredients,
      preparation,
      _id: insertedId,
    },
  };
};

const listAllRecipes = async () => connection()
  .then((db) => db.collection('recipes')
    .find().toArray());

const listRecipeById = async (id) => connection()
  .then((db) => db.collection('recipes')
    .findOne(ObjectId(id)));

module.exports = {
  registerNewRecipe,
  listAllRecipes,
  listRecipeById,
};