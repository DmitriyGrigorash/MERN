const stripe = require("stripe")("sk_test_9YWOBnIAPm008Q0LEm1I5sP200xzZlEsH6");

module.exports = app => {
    app.post("/api/stripe", async (req, res) => {
        await stripe.charges.create({
            amount: 2000,
            currency: "usd",
            description: "An example charge",
            source: req.body
        }, (err, charge) => {
            if (err) res.status(500).end();
            res.send({charge});
        });
    });
};