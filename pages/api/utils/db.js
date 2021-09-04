import mongoose from 'mongoose';
import nextConnect from 'next-connect';

const url = process.env.MONGODB_URL;
const database = async (req,res,next) => {
    mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  next();
}
// const connectDB = handler => async (req, res) => {
//   if (mongoose.connections[0].readyState) {
//     // Use current db connection
//     return handler(req, res);
//   }
//   // Use new db connection
//   await mongoose.connect(process.env.MONGODB_URL, {
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//     useNewUrlParser: true
//   });
//   return handler(req, res);
// };
const middleware = nextConnect();
middleware.use(database);
export default middleware;