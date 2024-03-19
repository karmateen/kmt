const mongoose = require('mongoose');

const referralSchema = new mongoose.Schema({
  referrer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  referredUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  bonusGranted: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Referral = mongoose.model('Referral', referralSchema);

module.exports = Referral;
