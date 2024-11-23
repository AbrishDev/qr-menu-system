const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true },
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String }, // E.g., Appetizers, Main Course
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
