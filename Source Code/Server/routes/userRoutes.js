const express = require('express');
const {
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
  userLogin,
  userRegister
} = require('../controllers/userController.js');

const authMiddleware = require('../middlewares/authMiddleware.js');

const router = express.Router();

// Auth
router.post('/login', userLogin);
router.post('/register', userRegister);

// Users CRUD (Protected)
router.get('/', authMiddleware, getAllUsers);
router.get('/:id', authMiddleware, getUserById);
router.put('/:id', authMiddleware, updateUser);
router.delete('/:id', authMiddleware, deleteUser);

module.exports = router;