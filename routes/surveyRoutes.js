const mongoose = require('mongoose');

const requireLogin = require("../middleware/requireLogin");
const requireCredits = require("../middleware/requireCredits");
const Mailer = require('../services/Mailer');
const surveyTemplates = require('../services/emailTemplates/surveyTemplate');

const SurveyModel = mongoose.model('Survey');

module.exports = app => {

    app.get("/api/surveys/thanks", (req, res) => {
        res.send("Thanks for voting")
    });

    app.post("/api/surveys", [requireLogin, requireCredits, async (req, res) => {
        const { subject, body, recipient, title } = JSON.parse(req.body);
        console.log('### req', subject, body, recipient, title);

        const splitedRecipiets = recipient.split(',').map(email => email.trim());
        const survey = new SurveyModel({
            title,
            subject,
            body: surveyTemplates(body),
            recipient: splitedRecipiets,
            _user: req.user.id,
            dateSent: Date.now(),
        });

        const mailer = new Mailer(subject, recipient, surveyTemplates(body));
        await mailer.sendEmail();

        try {
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }
    }]);
};
