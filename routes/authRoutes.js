const passport = require('passport');

module.exports = app => {
    app.get('/', (req, res) => {
        res.send('Main route');
    });
    app.get('/user', (req, res) => {
        if (!req.user) {
            res.send('Please log in!');
        } else {
            res.send('Logged in! Welcome friend! ' + req.user);
        }
    });

    app.get('/login', (req, res) => {
        res.send('Login ERROR')
    });
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/auth/google',
        passport.authenticate('google', { scope: ['profile', 'email'] }));
    app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
        (req, res) => {
            res.redirect('/user')
        }
    );
};
