const express = require('express');

const router = express.Router();
const referralController = require('../controllers/referralControllers.js');

router.post('/', referralController.createReferral);
router.put('/:referralId/grant-bonus', referralController.grantReferralBonus);

module.exports = router;
