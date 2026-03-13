
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const testConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB connected:", conn.connection.host);
    process.exit(0);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};

testConnect();