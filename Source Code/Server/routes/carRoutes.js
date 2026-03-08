const express = require('express');
const { createCar, deleteCar, getAllCars, getCarByFind, getCarById, updateCar } = require('../controllers/carController.js');
const upload = require('../middlewares/multer.js');
const authMiddleware = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.post('/', upload.single('carImage'), authMiddleware, createCar);
router.get('/', getAllCars);
router.get('/:id', getCarByFind);
router.put('/:id', authMiddleware, upload.single('image'), updateCar);
router.delete('/:id', authMiddleware, deleteCar);

module.exports = router;