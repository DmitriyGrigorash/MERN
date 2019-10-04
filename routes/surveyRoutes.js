const mongoose = require('mongoose');

const requireLogin = require("../middleware/requireLogin");
const requireCredits = require("../middleware/requireCredits");
const Mailer = require('../services/Mailer');
const surveyTemplates = require('../services/emailTemplates/surveyTemplate');

const SurveyModel = mongoose.model('surveys');

module.exports = app => {

    app.get("/api/surveys/thanks", (req, res) => {
        res.send("Thanks for voting")
    });

    app.post("/api/surveys", [requireLogin, requireCredits, async (req, res) => {
        const { subject, body, recipients, title } = JSON.parse(req.body);

        const splitedRecipiets = recipients.split(',').map(email => email.trim());
        const survey = new SurveyModel({
            title,
            subject,
            body: surveyTemplates(body),
            recipient: splitedRecipiets,
            _user: req.user.id,
            dateSent: Date.now(),
        });

        const mailer = new Mailer(subject, splitedRecipiets, surveyTemplates(body));
        await mailer.sendEmail();

        try {
            await survey.save();
            req.user.credits -= 1;
            console.log('### req.user', req.user);
            const user = await req.user.save();
            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }
    }]);

    app.post("/api/surveys/webhooks", (req, res) => {
        console.log('### req.body', req.body, res);
    });
};
