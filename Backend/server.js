// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Import cors
const connectDB = require('./config/db');
const documentRoutes = require('./routes/documentRoutes');
const { errorHandler } = require('./middleware/errormiddleware');

dotenv.config();
connectDB();

const app = express();

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());

app.use('/api/documents', documentRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
