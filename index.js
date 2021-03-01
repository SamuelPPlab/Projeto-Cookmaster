const express = require('express');
const bodyParser = require('body-parser');
const usersController = require('./controllers/users_Controller');
const loginController = require('./controllers/login_Controller');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/users', usersController);
app.use('/login', loginController);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(PORT);
