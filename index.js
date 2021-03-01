const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const usersController = require('./controller/usersController');

const PORT = 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(bodyParser.json());
app.use('/users', usersController);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
