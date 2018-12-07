const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const CustomerPurchaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  purchased: {
      type: Date,
      default: Date.now()
  }
})

// CustomerPurchaseSchema.plugin(timestamp);

module.exports = mongoose.model('CustomerPurchase', CustomerPurchaseSchema);