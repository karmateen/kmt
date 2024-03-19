const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationControllers.js');

router.post('/send', notificationController.sendNotification);
router.get('/history', notificationController.getNotificationHistory);

module.exports = router;