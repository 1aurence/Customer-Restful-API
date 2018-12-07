const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

// const CustomerPurchases = require()
const CustomerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    balance: {
        type: Number,
        trim: true,
        default: 0
    },
    purchases: [{ type: Schema.Types.ObjectId, ref: 'CustomerPurchases' }]    
})

CustomerSchema.plugin(timestamp);

module.exports = mongoose.model('Customer', CustomerSchema);