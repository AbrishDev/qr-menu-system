const express = require('express');
const { addMenu, getMenuByHotel } = require('../controllers/menuController');

const router = express.Router();

router.post('/:hotelId', addMenu); // Add menu for a hotel
router.get('/:hotelId', getMenuByHotel); // Get menu for a hotel

module.exports = router;
