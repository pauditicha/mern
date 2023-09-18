const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MONGODB CONNECTED: ${conn.connection.host}`.cyan.underline);
};

module.exports = connectDB;
