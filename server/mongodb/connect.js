import mongoose from "mongoose";

const connectDB = (url) => {
  // this is used for the search functionality
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB Is Succesfully Connected"))
    .catch((err) => console.log(`MongoDB Connection Error :: ${err}`));
};

export default connectDB;
