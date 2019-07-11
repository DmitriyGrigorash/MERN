const sgMail = require('@sendgrid/mail');

const keys = require('../config/keys');

class Mailer {
    constructor() {
        // this.recipients = this.formatAddresses(recipients);
        this.msg = {
            to: 'dmitriy2216@gmail.com',
            from: 'no-reply@emaily.com',
            subject: 'subject',
            text: 'and easy to do anywhere, even with Node.js',
            html: `<div>html</div>`
        };
    }

    formatAddresses(recipients) {
        return recipients.map(({ email }) => {
            return email;
        })
    }

    sendEmail() {
        sgMail.setApiKey(keys.sendGridKey);
        sgMail.send(this.msg)
            .then(res => res.json())
            .catch(err => err)
        console.log('### sendEmail');
    }
}

module.exports = Mailer;
