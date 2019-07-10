const sgMail = require('@sendgrid/mail');

const keys = require('../config/keys');

sgMail.setApiKey(keys.sendGridKey);
class Mailer extends sgMail {
    constructor({subject, recipients}, content) {
        super();

        this.recipients = this.formatAddresses(recipients);
        this.msg = {
            to: this.recipients,
            from: 'no-reply@emaily.com',
            subject: subject,
            text: 'and easy to do anywhere, even with Node.js',
            html: content
        };
    }

    formatAddresses(recipients) {
        return recipients.map(({ email }) => {
            return email;
        })
    }
}

module.exports = Mailer;
