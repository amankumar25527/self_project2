import express from "express";
import cors from "cors";
import 'dotenv/config';
import {connectDB} from "../backend/config/db.js"
import userRoutes from "./routes/authRoutes.js";
const app=express();
const port=process.env.PORT || 4000;
// middleware

app.use(express.json()); // Parse JSON requests
app.use(cors()); // Allow cross-origin requests
// db connection
  connectDB();
// api endpoint
  app.use("/api/user",userRoutes);
// global error handling
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    });
  });
 // port listning 
app.listen(port,()=>{
    console.log(`server is starting on port http://localhost:${port}`)
})