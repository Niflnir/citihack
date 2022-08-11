import mongoose from "mongoose";
import { app } from './app'

const start = async () => {
  console.log("Hello");
  try{
    await mongoose.connect("mongodb://username:password@localhost:27017");
    console.log('Connected to MongoDB')
  }catch(err){
    console.error(err);
  }
  app.listen(3001, () => {
    console.log('Listening on port 3001!')
  })
}

start();
