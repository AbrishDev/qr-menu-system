const Menu = require('../models/Menu');

exports.addMenu = async (req, res) => {
  try {
    const { hotelId } = req.params;
    const { items } = req.body;

    const menu = new Menu({ hotel: hotelId, items });
    await menu.save();

    res.status(201).json(menu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMenuByHotel = async (req, res) => {
  try {
    const { hotelId } = req.params;

    const menu = await Menu.findOne({ hotel: hotelId }).populate('hotel');
    if (!menu) return res.status(404).json({ message: 'Menu not found' });

    res.status(200).json(menu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
