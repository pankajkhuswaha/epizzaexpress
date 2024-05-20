import mongoose from "mongoose";

const dbconnect = async () => {
  console.log("%cConnecting database...", "color:green;");
  if (mongoose.connection.readyState === 1) {
    console.log("Database connection is already established.", "color:green");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URI!);
    console.log("%cDatabase Connected Successfully", "color:green;");
  } catch (error) {
    console.log({
      message: "Error in connecting Database",
      error: (error as Error).message,
    });
    throw error;
  }
};

export default dbconnect;
