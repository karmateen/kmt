const mongoose = require('mongoose');

const mapSchema = new mongoose.Schema({
  // Map schema fields
});

const Map = mongoose.model('Map', mapSchema);

module.exports = Map;
