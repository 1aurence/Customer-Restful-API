const errors = require('restify-errors');
const Purchase = require('../models/CustomerPurchases')

module.exports = server => {
// Add new purchase

server.post('/purchases', async (req, res, next) => {
    const { productId, name, price } = req.body;
    const purchase = new Purchase({
        productId,
        name,
        price
    })
    try {
       const newPurchase = await purchase.save();
       res.send(201)
       next()
    } catch(err) {
        return res.send(new errors.InternalError(err.message))
    }
})

// Get all purchases
server.get('/purchases', async (req, res, next) => {
    try {
        const purchases = await Purchase.find({})
        res.send(purchases)
        next()
    } catch(err) {
        return next(new errors.InvalidContentError(err))
    }
})

}