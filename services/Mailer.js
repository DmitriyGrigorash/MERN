const sgMail = require('@sendgrid/mail');

const keys = require('../config/keys');

sgMail.setApiKey(keys.sendGridKey);
class Mailer {
    constructor(subject, recipient, body) {

        this.msg = {
            to: recipient,
            from: 'no-reply@emaily.com',
            subject: subject,
            text: 'and easy to do anywhere, even with Node.js',
            html: body
        };
    }

    sendEmail() {
        sgMail.send(this.msg);
    }
}

module.exports = Mailer;
