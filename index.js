const express = require('express');
const { json } = require('body-parser');
const { usersRouter } = require('./routes/usersRouter');
const { loginRouter } = require('./routes/loginRouter');

const app = express();
const port = 3000;

app.use(json());
app.use('/users', usersRouter);
app.use('/login', loginRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => response.send({ message: 'ok' }));

app.listen(port, () => console.log(`App listening on port ${port}!`));
