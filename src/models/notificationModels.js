const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  // Notification schema fields
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
