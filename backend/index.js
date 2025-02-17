import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'; 

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Make sure to use the correct port

// Middleware
app.use(express.json());
app.use(cors());

// ✅ MongoDB Connection (Using MongoDB Atlas URI from .env)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Backend API!');
});

// User routes
app.use('/api', userRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
