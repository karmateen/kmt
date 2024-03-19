const Chat = require('../models/chatModels.js');

async function createChat(chatData) {
  try {
    const chat = await Chat.create(chatData);
    return chat;
  } catch (error) {
    throw new Error('Could not create chat');
  }
}

async function getChatById(chatId) {
  try {
    const chat = await Chat.findById(chatId);
    return chat;
  } catch (error) {
    throw new Error('Could not find chat');
  }
}

async function updateChat(chatId, updateData) {
  try {
    const chat = await Chat.findByIdAndUpdate(chatId, updateData, { new: true });
    return chat;
  } catch (error) {
    throw new Error('Could not update chat');
  }
}

async function deleteChat(chatId) {
  try {
    await Chat.findByIdAndDelete(chatId);
  } catch (error) {
    throw new Error('Could not delete chat');
  }
}

module.exports = {
  createChat,
  getChatById,
  updateChat,
  deleteChat
};
