const express = require('express');
const { createHotel, getHotels } = require('../controllers/hotelController');

const router = express.Router();

router.post('/', createHotel); // Create a hotel
router.get('/', getHotels);    // List all hotels

module.exports = router;
