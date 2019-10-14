const mongoose = require('mongoose');
const _ = require('lodash');
const Path = require('path-parser').default;

const requireLogin = require("../middleware/requireLogin");
const requireCredits = require("../middleware/requireCredits");
const Mailer = require('../services/Mailer');
const surveyTemplates = require('../services/emailTemplates/surveyTemplate');

const SurveyModel = mongoose.model('surveys');

module.exports = app => {

    app.get("/api/surveys/:surveyId/:choice", (req, res) => {
        res.send("Thanks for voting")
    });

    app.post("/api/surveys", [requireLogin, requireCredits, async (req, res) => {
        const { subject, body, recipients, title } = JSON.parse(req.body);

        // const splitedRecipiets = recipients.split(',').map(email => email.trim());
        const survey = new SurveyModel({
            title,
            subject,
            body: body,
            recipient: recipients,
            _user: req.user.id,
            dateSent: Date.now(),
        });

        const mailer = new Mailer(subject, recipients, surveyTemplates(survey));
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

    app.post("/api/surveys/webhooks", (req, res) => {
        const p = new Path('/api/surveys/:surveyId/:choice');

        const events = _.chain(req.body)
            .map(( {email, url} ) => {
                const match = p.test(new URL(url).pathname);
                if( match ) {
                    return { email, surveyId: match.surveyId, choice: match.choice }
                }
            })
            .compact()
            .uniqBy('email', 'surveyId')
            .value();

        console.log('### events', events);

        res.send({})
    });
};
