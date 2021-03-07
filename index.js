const bodyParser = require('body-parser');
const express = require('express');
const UserController = require('./src/controller/UserController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/users', UserController);

app.listen(PORT, () => console.log('App listening on PORT %s', PORT));