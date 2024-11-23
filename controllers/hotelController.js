// controllers/hotelController.js
const Hotel = require('../models/Hotel');
const User = require('../models/User');
const QRCode = require('qrcode');

// Add Hotel (superadmin only)
exports.addHotel = async (req, res) => {
  const { name, location, adminId } = req.body;
  try {
    const adminUser = await User.findById(adminId);
    if (!adminUser || adminUser.role !== 'hoteladmin') {
      return res.status(400).json({ message: 'Admin not valid or not hoteladmin' });
    }

    const hotel = await Hotel.create({
      name,
      location,
      admin: adminUser._id,
    });

    // Generate QR Code for the hotel
    const qrData = `https://example.com/menu/${hotel._id}`;
    const qrCode = await QRCode.toDataURL(qrData);

    // Save the QR code URL in hotel
    hotel.qrCode = qrCode;
    await hotel.save();

    res.status(201).json(hotel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all hotels (available to superadmin)
exports.getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find().populate('admin', 'name email');
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
