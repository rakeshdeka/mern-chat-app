require('dotenv').config(); 
console.log('MongoDB URI:', process.env.MONGO_URI); 

const mongoose = require("mongoose");
mongoose.set('strictQuery', true); 

const connectDB = async () => {
  try {
    // MONGO_URI needs to be in .env but not getting from .env
    const conn = await mongoose.connect('mongodb+srv://rakeshdeka:rakesh123@cluster0.nul4m56.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });
  

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit(1); 
  }
};

module.exports = connectDB;
