const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const CustomerSchema = new mongoose.Schema({
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
    datePurchased: {
        type: Date,
        trim: true,
        default: Date.now()
    }    
})

CustomerSchema.plugin(timestamp);

module.exports = mongoose.model('Customer', CustomerSchema);