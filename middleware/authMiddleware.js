const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.isAuthenticated = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

exports.isSuperAdmin = (req, res, next) => {
  if (req.user.role !== 'superadmin') {
    return res.status(403).json({ message: 'Access denied' });
  }
  next();
};

exports.isHotelAdmin = (req, res, next) => {
  if (req.user.role !== 'hoteladmin') {
    return res.status(403).json({ message: 'Access denied' });
  }
  next();
};
