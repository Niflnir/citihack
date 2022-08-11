import mongoose from "mongoose";

// An interface that describes the properties
// that are required to make a new Portfolio
interface PortfolioAttrs {
  email: string;
  income: number;
  percentIncome: number;
  risk: string;
  goal: string;
}

// An interface that describes the properties 
// that a Portfolio Model has
interface PortfolioModel extends mongoose.Model<PortfolioDoc> {
  build(attrs: PortfolioAttrs): PortfolioDoc;
}

// An interface that describes the properties
// that a Portfolio Model has
interface PortfolioDoc extends mongoose.Document {
  email: string;
  income: number;
  percentIncome: number;
  risk: string;
  goal: string;
}

const portfolioSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  income: {
    type: Number,
    required: false
  },
  percentIncome: {
    type: Number,
    required: false
  },
  risk: {
    type: String,
    required: false
  },
  goal: {
    type: String,
    required: false
  },
},{
    toJSON: {
      transform(doc, ret){
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      }
    }
});

portfolioSchema.statics.build = (attrs: PortfolioAttrs) => {
  return new Portfolio(attrs);
}

const Portfolio = mongoose.model<PortfolioDoc, PortfolioModel>('Portfolio', portfolioSchema);

export { Portfolio };
