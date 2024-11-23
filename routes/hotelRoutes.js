// routes/hotelRoutes.js
const express = require('express');
const { addHotel, getHotels } = require('../controllers/hotelController');
const { isAuthenticated, isSuperAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

// Superadmin routes
router.post('/add', isAuthenticated, isSuperAdmin, addHotel);
router.get('/', isAuthenticated, isSuperAdmin, getHotels);

module.exports = router;
