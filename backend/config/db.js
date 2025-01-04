const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(conn.connection.host);
  } catch (error) {
    console.error('error', error.message);
    process.exit(1); // 1- failure
  }
};

module.exports = { connectDB };