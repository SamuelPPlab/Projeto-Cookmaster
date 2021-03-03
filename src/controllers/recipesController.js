const { Router } = require('express');
const { ObjectId } = require('mongodb');
const recipeService = require('../services/recipesService');

const recipesEntriesValidation = require('../middlewares/recipesEntriesValidation');
const { validateToken } = require('../auth/validateToken');

const router = Router();

const OK = 200;

router.get('/', async (_req, res) => {
  const recipes = await recipeService.getAll();

  res.status(OK).json(recipes);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const recipe = await recipeService.findById(ObjectId(id));

  res.status(OK).json(recipe);
});

router.post('/', recipesEntriesValidation, async (req, res) => {
  const { name, ingredients, preparation } = req.body;
  const { authorization: token } = req.headers;

  const payload = await validateToken(token);
  const { _id: userId } = payload;

  const { insertedId } = await recipeService.create(name, ingredients, preparation);

  const recipe = {
    _id: insertedId,
    name,
    ingredients,
    preparation,
    userId,
  };

  res.status(201).json({ recipe });
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { user } = req.body;

  await recipeService.update(id, user);
  
  const editedUser = {
    _id: id,
    itensSold: req.body,
  };

  res.status(OK).json(editedUser);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const deletedUser = await recipeService.findById(id);

  await recipeService.remove(id);

  res.status(OK).json(deletedUser);
});

module.exports = router;