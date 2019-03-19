const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

// *** Run express
const app = express();
const PORT = 5000;
app.use(router);


// ***  settings
const keys = require('./config/credentials');
console.log('#### keys', keys);


passport.use(new GoogleStrategy({
        clientID: keys.web.client_id,
        clientSecret: keys.web.client_secret,
        callbackURL: keys.web.redirect_uris[0],
    },
    (accessToken, refreshToken, profile, cb) => {
        console.log('#### accessToken, refreshToken, profile, cb', accessToken, refreshToken, profile, cb);
    }
));

/* ROUTES */
app.get('/', (req, res) => {
     res.send('Logged in! Welcome friend!')
});
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', (req, res) => {
    passport.authenticate('google', { failureRedirect: '/login' }),
    res.redirect('/');
});



// *** Express listen
app.listen(PORT, () => {
    console.log('#### Server is running on port: ', PORT);
});
