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

    formatAddresses(recipients) {
        if (recipients.length === 1) {
            return recipients[0];
        }
        return recipients.map(({ email }) => {
            return email;
        })
    }

    sendEmail() {
        sgMail.send(this.msg);
        console.log('### sendEmail', this.msg);
    }
}

module.exports = Mailer;
