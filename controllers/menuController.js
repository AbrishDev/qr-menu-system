// controllers/menuController.js
const MenuItem = require('../models/MenuItem');

// Add Menu Item (hoteladmin only)
exports.addMenuItem = async (req, res) => {
  const { hotelId, name, description, price, category } = req.body;
  try {
    const menuItem = await MenuItem.create({
      hotel: hotelId,
      name,
      description,
      price,
      category,
    });

    res.status(201).json(menuItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Menu by Hotel (public access)
exports.getMenuByHotel = async (req, res) => {
  const { hotelId } = req.params;
  try {
    const menuItems = await MenuItem.find({ hotel: hotelId });
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
