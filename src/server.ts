import express from 'express';
import path from 'path';
import routes from './routes';
import cors from 'cors';

import 'express-async-errors';
import './database/connection';

import errorHandler from './errors/handler';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))



app.listen(3333, () => {
    console.log('Server started!');
  });