import mongoose from "mongoose";
import nextConnect from "next-connect";

const url = process.env.MONGODB_URL;
const database = async (req, res, next) => {
  mongoose.connect(url);
  mongoose.set("strictQuery", false);
  next();
};

const middleware = nextConnect();
middleware.use(database);
export default middleware;
