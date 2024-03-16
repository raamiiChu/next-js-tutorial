import mongoose from "mongoose";

const connect = async () => {
  try {
    const { MONGO } = process.env;

    if (!MONGO) {
      throw new Error("MongoDB uri no found");
    }
    await mongoose.connect(MONGO);
  } catch (error) {
    throw new Error("Connection failed");
  }
};

export default connect;
