const express = require('express');
const {
  createRide,
  deleteRide,
  getAllRides,
  getUserRides
} = require('../controllers/bookingController.js');

const authMiddleware = require('../middlewares/authMiddleware.js');

const router = express.Router();

// Create booking
router.post('/', authMiddleware, createRide);

// Get all bookings (Admin)
router.get('/', authMiddleware, getAllRides);

// Get bookings by user
router.get('/user/:userId', authMiddleware, getUserRides);

// Delete booking
router.delete('/:id', authMiddleware, deleteRide);

module.exports = router;