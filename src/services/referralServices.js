const Referral = require('../models/referralmodels.js');

async function createReferral(referralData) {
  try {
    const referral = await Referral.create(referralData);
    return referral;
  } catch (error) {
    throw new Error('Could not create referral');
  }
}

async function getReferralById(referralId) {
  try {
    const referral = await Referral.findById(referralId);
    return referral;
  } catch (error) {
    throw new Error('Could not find referral');
  }
}

async function updateReferral(referralId, updateData) {
  try {
    const referral = await Referral.findByIdAndUpdate(referralId, updateData, { new: true });
    return referral;
  } catch (error) {
    throw new Error('Could not update referral');
  }
}

async function deleteReferral(referralId) {
  try {
    await Referral.findByIdAndDelete(referralId);
  } catch (error) {
    throw new Error('Could not delete referral');
  }
}

module.exports = {
  createReferral,
  getReferralById,
  updateReferral,
  deleteReferral
};
