const jwt = require('jsonwebtoken');
const recipesModel = require('../Models/recipesModel');
const usersModel = require('../Models/usersModel');

const created = 201;
const segredo = 'cabeça';

const create = async (req, res) => {
  const { name, ingredients, preparation } = req.body;
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, segredo);
  const { data } = decoded;
  const getUser = await usersModel.getByEmail(data.email);
  const { _id: id } = getUser;

  const creation = await recipesModel.create(name, ingredients, preparation);
  const addRecipe = {
    name,
    ingredients,
    preparation,
    userId: id,
    _id: creation.insertedId,
  };

  res.status(created).json({ recipe: addRecipe });
};

module.exports = {
  create,
};