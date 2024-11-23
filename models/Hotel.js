const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  qrCodeUrl: { type: String }, // URL for the QR code
});

module.exports = mongoose.model('Hotel', HotelSchema);
