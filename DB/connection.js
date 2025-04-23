import mongoose from "mongoose";

export const connectDB = async () => {
  // await mongoose.connect('mongodb://127.0.0.1:27017/Course-Management')
  await mongoose
    .connect(  
      "mongodb+srv://jo:joe2025@cluster0.4jkqi.mongodb.net/Course-Management"
    )
    .then((result) => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log("Error connecting to DB", err);
    });
};
