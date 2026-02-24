const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error.message);
    console.warn('\n⚠️ WARNING: Could not connect to local MongoDB. ⚠️\nPlease ensure MongoDB is installed and running on port 27017.\nFor demonstration purposes without MongoDB, you would need to mock the Mongoose models entirely, which is outside the scope of this architecture.\nExiting process...');
    process.exit(1);
  }
};

module.exports = connectDB;
