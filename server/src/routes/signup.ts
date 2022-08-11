import express, { Request, Response } from 'express'; 
import { User } from '../models/user';
import { json } from 'body-parser';

const router = express.Router();

router.post('/api/users/signup', json(),
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = User.build({ email, password });
    await user.save();

    res.status(200).send({
      message: "User is signed up"
    });
  }
)

export {router as signupRouter};
