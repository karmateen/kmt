const express = require('express');
const router = express.Router();
const mapController = require('../controllers/mapControllers.js');

router.get('/', mapController.getMapData);
router.put('/marker', mapController.updateMapMarker);

module.exports = router;
