const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  // Chat schema fields
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
