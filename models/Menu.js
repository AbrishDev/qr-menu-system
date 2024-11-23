const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true },
  items: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      description: { type: String },
    },
  ],
});

module.exports = mongoose.model('Menu', MenuSchema);
