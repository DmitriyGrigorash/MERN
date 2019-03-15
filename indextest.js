const express = require('express');
const {google} = require('googleapis');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// *** Run express
const app = express();
const PORT = 5000;

app.use(router);


// *** oAuth2 settings
const keyPath = path.join(__dirname, './config/googleoauth.json');
let keys = {redirect_uris: ['']};
if (fs.existsSync(keyPath)) {
    keys = require(keyPath).web;
}
const TOKEN_PATH = './config/token.json';
const SCOPES = ['profile'];

const oauth2Client = new google.auth.OAuth2(
    keys.client_id,
    keys.client_secret,
    keys.redirect_uris[0],
);
google.options({auth: oauth2Client});


function authorize (res) {
    const authorizeUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    res.redirect(authorizeUrl);
}


function getNewToken(code) {
    oauth2Client.getToken(code, (err, token) => {
        if ( err ) return console.error( 'Error retrieving access token', err );
        oauth2Client.setCredentials( token );
        fs.writeFile( TOKEN_PATH, JSON.stringify( token ), ( err ) => {
            if ( err ) return console.error( err );
            console.log( 'Token stored to', TOKEN_PATH );
        });
    });
}


// *** Routes
router.get('/', (req, res) => {
    res.send('Root url');
});
router.get('/auth/google', (req, res) => {
    authorize(res);
});
router.get('/auth/google/callback', (req, res) => {
    const code = req.query.code;

    fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) getNewToken(code);
        oauth2Client.setCredentials(JSON.parse(token));
    })

});



// *** Express listen
app.listen(PORT, () => {
    console.log('#### Server is running on port: ', PORT);
});
