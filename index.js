const {google} = require('googleapis');
const fs = require('fs');
const path = require('path');
const url = require('url');
const http = require('http');
const opn = require('opn');
const destroyer = require('destroyer');


const keyPath = path.join(__dirname, './config/googleoauth.json');
let keys = {redirect_uris: ['']};
if (fs.existsSync(keyPath)) {
    keys = require(keyPath).web;
}
const oauth2Client = new google.auth.OAuth2(
    keys.client_id,
    keys.client_secret,
    keys.redirect_uris[0],
);


async function authenticate(scopes) {
    return new Promise((resolve, reject) => {
        // grab the url that will be used for authorization
        const authorizeUrl = oauth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: scopes.join(' '),
        });
        const server = http
            .createServer(async (req, res) => {
                try {
                    if (req.url.indexOf('/auth/google') > -1) {
                        const qs = new url.URL(req.url, 'http://localhost:5000').searchParams;
                        // res.end('Authentication successful! Please return to the console.');
                        res.end('Authentication successful! Please return to the console.');
                        const {tokens} = await oauth2Client.getToken(qs.get('code'));
                        oauth2Client.credentials = tokens;
                        resolve(oauth2Client);
                    }
                } catch (e) {
                    reject(e);
                }
            })
            .listen(5000, () => {
                // open the browser to the authorize url to start the workflow
                opn(authorizeUrl, {wait: false}).then(cp => cp.unref());
            });
        destroyer(server);
    });
}

const scopes = ['profile'];
authenticate(scopes)
    .then(client => console.log('#### client', client))
    .catch(console.error);
