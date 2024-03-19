const Notification = require('../models/notificationModels.js');

async function createNotification(notificationData) {
  try {
    const notification = await Notification.create(notificationData);
    return notification;
  } catch (error) {
    throw new Error('Could not create notification');
  }
}

async function getNotificationById(notificationId) {
  try {
    const notification = await Notification.findById(notificationId);
    return notification;
  } catch (error) {
    throw new Error('Could not find notification');
  }
}

async function updateNotification(notificationId, updateData) {
  try {
    const notification = await Notification.findByIdAndUpdate(notificationId, updateData, { new: true });
    return notification;
  } catch (error) {
    throw new Error('Could not update notification');
  }
}

async function deleteNotification(notificationId) {
  try {
    await Notification.findByIdAndDelete(notificationId);
  } catch (error) {
    throw new Error('Could not delete notification');
  }
}

module.exports = {
  createNotification,
  getNotificationById,
  updateNotification,
  deleteNotification
};
