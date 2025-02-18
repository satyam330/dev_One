import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'; 
import mongodb from 'mongodb';
import serverless from 'serverless-http';


// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Make sure to use the correct port

// Middleware
app.use(express.json());
app.use(cors());

// ✅ MongoDB Connection (Using MongoDB Atlas URI from .env)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));




// Get the MongoDB client
const MongoClient = mongodb.MongoClient;

// Replace with your actual MongoDB URI and credentials

// Create a new MongoClient instance
// const client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// // Connect to the MongoDB cluster
// client.connect(err => {
//   if (err) {
//     console.log('MongoDB connection error:', err);
//     return;
//   }

  // console.log('MongoDB connected successfully!');
  
  // Replace with your actual database and collection names
//   const collection = client.db('userDB').collection('users');
  
//   // Perform actions on the collection object, such as inserting data
//   collection.find({}).toArray((err, result) => {
//     if (err) {
//       console.log('Error querying data:', err);
//     } else {
//       console.log('Data from MongoDB:', result);
//     }

//     // Close the connection after the actions
//     client.close();
//   });
// });

const API_URL = process.env.REACT_APP_API_URL || "https://your-backend-url.vercel.app";

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Backend API!');
});

app.get('/', (req, res) => {
  res.send('Hello, Vercel!');
});
export const handler = serverless(app);

// User routes
app.use('/api', userRoutes);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  w: "majority"  // Ensure correct write concern
});


// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


export default app; // Vercel requires this
