const Map = require('../models/mapModels.js');

async function createMap(mapData) {
  try {
    const map = await Map.create(mapData);
    return map;
  } catch (error) {
    throw new Error('Could not create map');
  }
}

async function getMapById(mapId) {
  try {
    const map = await Map.findById(mapId);
    return map;
  } catch (error) {
    throw new Error('Could not find map');
  }
}

async function updateMap(mapId, updateData) {
  try {
    const map = await Map.findByIdAndUpdate(mapId, updateData, { new: true });
    return map;
  } catch (error) {
    throw new Error('Could not update map');
  }
}

async function deleteMap(mapId) {
  try {
    await Map.findByIdAndDelete(mapId);
  } catch (error) {
    throw new Error('Could not delete map');
  }
}

module.exports = {
  createMap,
  getMapById,
  updateMap,
  deleteMap
};
