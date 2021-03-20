const bodyParser = require('body-parser');
const express = require('express');
const UserController = require('./src/controller/UserController');
const LoginController = require('./src/controller/LoginController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/users', UserController);
app.use('/login', LoginController);

app.listen(PORT, () => console.log('App listening on PORT %s', PORT));