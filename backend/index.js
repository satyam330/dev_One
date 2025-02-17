import express from "express";
import mongoose from "mongoose";
import cors from "cors";
 import userRoutes from "./routes/userRoutes.js"; 
import { User } from "./models/user.js";
 
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// ✅ MongoDB Connection
mongoose.connect("mongodb://localhost:27017/userDB").then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

  app.get("/", (req, res) => {
    res.send("Welcome to the Backend API!");
});

app.use("/api", userRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('MongoDB connection error:', err));
