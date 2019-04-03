const passport = require('passport');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Logged in! Welcome friend!')
    });
    app.get('/login', (req, res) => {
        res.send('Login ERROR')
    });
    app.get('/auth/google',
        passport.authenticate('google', { scope: ['profile'] }));

    app.get('/auth/google/callback', (req, res) => {
        passport.authenticate('google', { failureRedirect: '/login' }),
            res.redirect('/');
    })
};
