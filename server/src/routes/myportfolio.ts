import express, { Request, Response } from 'express'; 
import { Portfolio } from '../models/portfolio';
import { json } from 'body-parser';

const router = express.Router();

router.get('/api/users/myportfolio/:id', json(), async (req: Request, res: Response) => {
  const portfolio = Portfolio.findById(req.params.id);

  res.status(200).send({
    portfolio
  })
})

export {router as myPortfolioRouter};
