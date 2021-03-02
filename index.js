const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controller/userController');
const loginController = require('./controller/loginController');

const PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.use('/users', userController);
app.use('/login', loginController);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
app.listen(PORT, () => console.log(`server listening on ${PORT} port`));