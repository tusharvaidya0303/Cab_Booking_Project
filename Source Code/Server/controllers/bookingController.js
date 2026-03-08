const Mybookings = require("../models/MyBookingSchema.js");
// Create a new ride booking
const createRide = async (req, res) => {
  const {
    selectedPickupState, selectedPickupCity,
    selectedDropState, selectedDropCity,
    pickupdate, pickuptime, dropdate, droptime,
    bookeddate, drivername,
    fare, carname, cartype, carno, price
  } = req.body;

   const { id: userId, name: userName } = req.user;
   
  try {
    const book = new Mybookings({
      selectedPickupState, selectedPickupCity,
      selectedDropState, selectedDropCity,
      pickupdate, pickuptime, dropdate, droptime,
      bookeddate, userId, userName, drivername,
      fare, carname, cartype, carno, price
    });

    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create ride' });
  }
};

// Get all ride bookings
 const getAllRides = async (req, res) => {
  try {
    const rides = await Mybookings.find();
    res.json(rides);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Delete a ride booking by ID
 const deleteRide = async (req, res) => {
  const { id } = req.params;
  try {
    await Mybookings.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get bookings for a specific user
const getUserRides = async (req, res) => {
  const { userId } = req.params;
  try {
    const tasks = await Mybookings.find({ userId }).sort('position');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch rides' });
  }
};

module.exports = {
  createRide,
  getAllRides,
  deleteRide,
  getUserRides
}