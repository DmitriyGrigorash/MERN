const stripe = require("stripe")("sk_test_9YWOBnIAPm008Q0LEm1I5sP200xzZlEsH6");
const requireLogin = require("../middleware/requireLogin");

module.exports = app => {
    app.post("/api/stripe", [requireLogin, async (req, res) => {

        await stripe.charges.create({
            amount: 1500,
            currency: "usd",
            description: "An example charge",
            source: req.body
        }, (err, charge) => {
            if (err) res.status(500).end();
            // res.send({charge});
        });

        req.user.credits = parseInt(req.user.credits, 10) + 15;
        try {
            const user = await req.user.save();
            res.send(user);
        } catch (err) {
            res.send(err);
        }
    }]);
};
