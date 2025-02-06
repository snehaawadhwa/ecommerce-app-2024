import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to MongoDB Database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (err) {
    console.log(`Error in MongoDB ${err}`.bgRed.white);
  }
};

export default connectDB;
