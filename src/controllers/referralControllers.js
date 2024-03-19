const Referral = require('../models/referralmodels.js');
const User = require('../models/userModels.js');

exports.createReferral = async (req, res) => {
  try {
    const { referrerId, referredUserId } = req.body;
    const referral = await Referral.create({ referrer: referrerId, referredUser: referredUserId });
    res.status(201).json({ referral });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.grantReferralBonus = async (req, res) => {
  try {
    const { referralId } = req.params;
    const referral = await Referral.findById(referralId);
    if (!referral) {
      return res.status(404).json({ error: 'Referral not found' });
    }
    if (referral.bonusGranted) {
      return res.status(400).json({ error: 'Bonus already granted for this referral' });
    }
    // grant bonus to referrer
    referral.bonusGranted = true;
    await referral.save();
    res.json({ message: 'Bonus granted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};