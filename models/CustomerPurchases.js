const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const CustomerPurchaseSchema = new Schema({
  productName: {
    type: String,
    required: true
  },
  productId: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  purchaseDate: {
      type: Date,
      default: Date.now()
  },
   customerEmail: {
    type: String,
    required: true
   }

})

// CustomerPurchaseSchema.plugin(timestamp);

module.exports = mongoose.model('CustomerPurchase', CustomerPurchaseSchema);