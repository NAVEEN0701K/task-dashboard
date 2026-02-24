const mongoose = require('mongoose');

// Cache the connection across serverless invocations
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  // Return cached connection if available
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const mongodb_uri = process.env.MONGODB_URI;

    if (!mongodb_uri) {
      throw new Error('MONGODB_URI is not defined. Please add it to your environment variables (Vercel Dashboard -> Settings -> Environment Variables).');
    }

    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(mongodb_uri, opts).then((mongoose) => {
      console.log('MongoDB Connected');
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    console.error('Database connection error:', error.message);
    throw error; // Let the caller handle the error (returns 500 to client)
  }

  return cached.conn;
};

module.exports = connectDB;
