const mongoose = require('mongoose');

const sgMail = require('@sendgrid/mail');
const keys = require('../config/keys');

const requireLogin = require("../middleware/requireLogin");
const requireCredits = require("../middleware/requireCredits");
const Mailer = require('../services/Mailer');
const surveyTemplates = require('../services/emailTemplates/surveyTemplate');

const SurveyModel = mongoose.model('Survey');

module.exports = app => {
    app.post("/api/surveys", [requireLogin, requireCredits, async (req, res) => {
        // const { subject, body, recipients } = res.body;

        const request = await res.json(req.body);
        console.log('### res', request);
        // const survey = new SurveyModel({
        //     title,
        //     subject,
        //     body,
        //     recipients /*recipients.split(',').map(email => email.trim())*/,
        //     _user: req.user.id,
        //     dateSent: Date.now(),
        // });
        console.log('### recipients', recipients);
        const msg = {
            to: recipients,
            from: 'no-reply@emaily.com',
            subject,
            text: 'and easy to do anywhere, even with Node.js',
            html: surveyTemplates(body)
        };
        sgMail.setApiKey(keys.sendGridKey);
        await sgMail.send(msg);
        res.send('ok');
        // const mailer = new Mailer();
        // mailer.sendEmail();
    }]);
};
