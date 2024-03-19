const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatControllers.js');

router.post('/send', chatController.sendMessage);
router.get('/history', chatController.getChatHistory);

module.exports = router;