const express = require('express');
const bodyParser = require('body-parser');

const appRoutes = require('./src/routes/UserRoutes');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log({ method: req.method, endpoint: req.originalUrl });
  next();
});
app.use(appRoutes);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

const SERVER_PORT = 3000;

app.listen(SERVER_PORT, () => {
  console.log('API ONLINE... 3000');
});
