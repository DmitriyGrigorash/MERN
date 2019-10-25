const sgMail = require('@sendgrid/mail');

const keys = require('../config/keys');

sgMail.setApiKey(keys.sendGridKey);
class Mailer {
    constructor(subject, recipients, body) {

        this.msg = {
            to: recipients,
            from: 'no-reply@emaily.com',
            subject: subject,
            text: 'and easy to do anywhere, even with Node.js',
            html: body
        };
    }

    sendEmail() {
        sgMail.sendMultiple(this.msg);
    }
}

module.exports = Mailer;
