import express from 'express';
import {errorHandler, NotFoundError} from '@niftickets/common'
import { quizRouter } from './routes/quiz';
import { signupRouter } from './routes/signup';
import { myPortfolioRouter } from './routes/myportfolio';
import cookieSession from 'cookie-session';

var cors = require('cors');
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}
const app = express();
app.use(cors(corsOptions));
app.set('trust proxy', true);
app.use(cookieSession({
  name: 'session',
  keys: ['key1']
}))

app.use(signupRouter);
app.use(quizRouter);
app.use(myPortfolioRouter);

app.all('*', async(req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler)

export { app };
