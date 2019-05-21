const passport = require('passport');

module.exports = app => {
    app.get('/', (req, res) => {
        res.send('Main route');
    });
    app.get('/api/current_user', (req, res) => {
        if (!req.user) {
            res.send(null);
        } else {
            res.send(req.user);
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
            res.redirect('/surveys')
        }
    );
};
