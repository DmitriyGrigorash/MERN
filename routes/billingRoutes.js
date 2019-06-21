const stripe = require("stripe")("sk_test_9YWOBnIAPm008Q0LEm1I5sP200xzZlEsH6");

module.exports = app => {
    app.post("/api/stripe", async (req, res) => {
        try {
            let {status} = await stripe.charges.create({
                amount: 10,
                currency: "usd",
                description: "An example charge",
                source: req.body
            });
            res.json({status});
        } catch (err) {
            res.status(500).end();
        }
    });
};