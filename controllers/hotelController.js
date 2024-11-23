const Hotel = require('../models/Hotel');
const QRCode = require('qrcode');

exports.createHotel = async (req, res) => {
  try {
    const { name, location } = req.body;

    // Create a new hotel
    const hotel = new Hotel({ name, location });

    // Generate QR code
    const qrCodeUrl = `${process.env.BASE_URL}/menu/${hotel._id}`;
    const qrCodeImage = await QRCode.toDataURL(qrCodeUrl);
    hotel.qrCodeUrl = qrCodeImage;

    await hotel.save();
    res.status(201).json(hotel);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
