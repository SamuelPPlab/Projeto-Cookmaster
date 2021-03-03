const express = require('express');
const bodyParser = require('body-parser');

const expectedError = require('./Middlewares/expectedError');
const usersController = require('./Controllers/usersController');
const usersLogin = require('./Controllers/usersLogin');
const { validateEntriesLogin,
    validateEmailLogin, validatePasswordLogin } = require('./Middlewares/usersValidators');

const app = express();
const bell = 3000;
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/users', usersController);
app.post('/login', validateEntriesLogin, validateEmailLogin,
validatePasswordLogin, usersLogin);

app.use(expectedError);
app.listen(bell, () => console.log(`For whom the ${bell} tolls!`));
