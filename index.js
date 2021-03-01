const express = require('express');
// const path = require('path');
const bodyParser = require('body-parser');
const UsersController = require('./src/controllers/UsersController');
const RecipesController = require('./src/controllers/RecipesController');

const app = express();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

// ________________________________________________________

app.use(bodyParser.json());

app.use('/users', UsersController);

app.use('/recipes', RecipesController);

// prerequisito multer
// app.use('/images', express.static(path.join(__dirname, 'uploads')));

// ________________________________________________________

const PORT = 3000;

app.listen(PORT, () => console.log('Server is running!'));
