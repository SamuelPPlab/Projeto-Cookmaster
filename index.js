const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('./controllers/UserContrloller');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/users', UserController);

app.listen(PORT, () => console.log(`listen at port: ${PORT}`));
