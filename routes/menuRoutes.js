// routes/menuRoutes.js
const express = require('express');
const { addMenuItem, getMenuByHotel } = require('../controllers/menuController');
const { isAuthenticated, isHotelAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

// Add menu item (hoteladmin only)
router.post('/add', isAuthenticated, isHotelAdmin, addMenuItem);

// Get menu by hotel ID (public access)
router.get('/menu/:hotelId', getMenuByHotel);

module.exports = router;
