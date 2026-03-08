require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./db/config.js');
const carRoutes = require('./routes/carRoutes.js');
const adminRoutes = require('./routes/adminRoutes.js');
const bookingRoutes = require('./routes/bookingRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const path = require('path');

const app = express();

app.use(express.json());

app.use(cors({
  origin: ['http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Serve static files
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to DB:', err);
  });