const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const keys = require('../config/credentials');

passport.use(new GoogleStrategy({
        clientID: keys.web.client_id,
        clientSecret: keys.web.client_secret,
        callbackURL: keys.web.redirect_uris[0],
    },
    (accessToken, refreshToken, profile, cb) => {
        console.log('#### accessToken, refreshToken, profile, cb', accessToken, refreshToken, profile, cb);
    }
));
