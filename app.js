// Load environment variables from .env
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const authenticate = require('./middleware/auth'); // Include authentication middleware (if needed)

// Create Express app
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS for all routes (you can restrict this if needed)
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Use routes for handling user API
// Optionally use authentication middleware here
app.use('/api/user', userRoutes);

// Set the port from environment or default to 5001
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

