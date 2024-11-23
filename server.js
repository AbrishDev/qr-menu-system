require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const hotelRoutes = require('./routes/hotelRoutes');
const menuRoutes = require('./routes/menuRoutes');

const app = express();
app.use(express.json());
app.use('/api/hotels', hotelRoutes);
app.use('/api/menus', menuRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
