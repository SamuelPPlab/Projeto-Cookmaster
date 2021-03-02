const express = require('express');
const bodyParser = require('body-parser');
const UsersController = require('./controllers/UsersController');
const LoginController = require('./controllers/LoginController');
const RecipesController = require('./controllers/RecipesController');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.use('/users', UsersController);
app.use('/login', LoginController);
app.use('/recipes', RecipesController);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT);
