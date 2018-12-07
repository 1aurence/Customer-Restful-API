const errors = require('restify-errors');
const Purchase = require('../models/CustomerPurchases')
const Customer = require('../models/Customer')

module.exports = server => {
    // Add new purchase

    server.post('/purchases', async (req, res, next) => {
        const {
            productName,
            productId,
            customerEmail,
            price
        } = req.body;
        const purchase = new Purchase({
            productId,
            productName,
            price,
            customerEmail
        })
        try {
            const addPurchase = await Customer.findAndUpdate({
                    email: customerEmail
                }, {
                    $push: {
                        purchases: purchase
                    }
                }

            )
            // addPurchase[0].purchases.push(purchase)
            // console.log(addPurchase)
            // const updateCustomerPurchases = await addPurchase.save();
            const newPurchase = await purchase.save();
            res.send(201)
            next()
        } catch (err) {
            return res.send(new errors.InternalError(err.message))
        }
    })

    // Get all purchases
    server.get('/purchases', async (req, res, next) => {
        try {
            const purchases = await Purchase.find({})
            res.send(purchases)
            next()
        } catch (err) {
            return next(new errors.InvalidContentError(err))
        }
    })

}