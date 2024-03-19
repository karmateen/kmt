const express = require('express');
const authController = require('../controllers/authControllers.js');

const router = express.Router();

router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/register', authController.register);

module.exports = router;