import express from 'express';
import './src/api/models/connection';
import { config as dotenvConfig } from 'dotenv'
import routes from './src/api/routes'

dotenvConfig()

const app = express();

app.use(express.json());
app.use('/', routes);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => console.log('Server is running!'));