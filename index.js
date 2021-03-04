const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
const { users, login, recipesRouter } = require('./controller');
// const { handleErrors } = require('./middlewares');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/users', users);
app.use('/login', login);
app.use('/recipes', recipesRouter);
// app.use(handleErrors);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Simbora na porta ${PORT}`);
});
