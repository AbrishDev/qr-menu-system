const express = require('express');
const { login, registerSuperAdmin } = require('../controllers/authController');

const router = express.Router();

router.post('/login', login);
router.post('/register-superadmin', registerSuperAdmin);

module.exports = router;
