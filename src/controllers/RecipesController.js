const { Router } = require('express');
const { TokenValidation } = require('../Auth/TokenValidation');
const { 
  RecipesValidation, 
  RecipeIdValidation,
} = require('../middlewares/RecipesValidation');
const { 
  RecipesCreateService, 
  RecipesGetAllService, 
  RecipeGetByIdService,
  RecipeUpdateService,
  RecipeDeleteService,
} = require('../services/RecipesService');

const RecipesController = new Router();

// Requisito 3
RecipesController.post('/', TokenValidation, RecipesValidation, RecipesCreateService);

// Requisito 4
RecipesController.get('/', RecipesGetAllService);
RecipesController.get('/', TokenValidation, RecipesGetAllService);

// Requisito 5
RecipesController.get('/:id', RecipeIdValidation, RecipeGetByIdService);
RecipesController.get('/:id', RecipeIdValidation, TokenValidation, RecipeGetByIdService);

// Requisito 7
RecipesController.put('/:id', TokenValidation, RecipeUpdateService);

// Requisito 8
RecipesController.delete('/:id', TokenValidation, RecipeDeleteService);

module.exports = RecipesController;
