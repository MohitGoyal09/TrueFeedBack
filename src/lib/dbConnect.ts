import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  // console.log('MONGODB_URI:', process.env.MONGODB_URI); // Add this line to debug

  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }

  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    throw new Error("MONGODB_URI is not defined in environment variables");
  }

  // Validate URI format
  if (!mongoUri.startsWith('mongodb://') && !mongoUri.startsWith('mongodb+srv://')) {
    throw new Error('Invalid MongoDB connection string format');
  }

  try {
    const db = await mongoose.connect(mongoUri);
    connection.isConnected = db.connections[0].readyState;
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
}

export default dbConnect;
