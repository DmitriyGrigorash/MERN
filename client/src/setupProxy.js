const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:5000/', ws: true}));
    app.use(proxy('/api/stripe', { target: 'http://localhost:5000/', ws: true}));
};
