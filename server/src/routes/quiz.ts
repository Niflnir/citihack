import express, { Request, Response } from 'express'; 
import { User } from '../models/user';
import { Portfolio } from '../models/portfolio';
import { BadRequestError} from '@niftickets/common'
import { json } from 'body-parser';

const router = express.Router();

router.post('/api/users/quiz', json(), async (req: Request, res: Response) => {
  const {email, income, percentIncome, risk, goal} = req.body;

  const existingUser = await User.findOne({ email });
  if(!existingUser || email === null ){
    throw new BadRequestError('Invalid credentials');
  }

  const portfolio = Portfolio.build({email, income, percentIncome, risk, goal});
  await portfolio.save();

  res.status(200).send({
    portfolio
  })
})

export {router as quizRouter};
