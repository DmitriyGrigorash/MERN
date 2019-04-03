const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const keys = require('../config/credentials');

const UserModel = mongoose.model('users');

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.web.client_id,
            clientSecret: keys.web.client_secret,
            callbackURL: keys.web.redirect_uris[0],
        },
        function (accessToken, refreshToken, profile, cb) {
            const User = new UserModel({googleId: profile.id});
            User.save((err, user) => {
                if (err) {
                    console.log('#### err', err);
                }
                return cb(err, user);
            })
        }
));
