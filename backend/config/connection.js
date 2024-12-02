const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "todo",
    });
    console.log(`Database connected to host: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting database: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
