const Map = require('../models/mapModels.js');

exports.getMapData = async (req, res) => {
  try {
    const mapData = await Map.find();
    res.json(mapData);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateMapMarker = async (req, res) => {
  // Logic to update map marker
};