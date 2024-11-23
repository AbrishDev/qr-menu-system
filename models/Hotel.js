const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Hotel Admin
  qrCode: { type: String }, // QR code URL or Base64 string
});

module.exports = mongoose.model('Hotel', hotelSchema);
