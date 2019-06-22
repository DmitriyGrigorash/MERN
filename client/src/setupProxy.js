const proxy = require('http-proxy-middleware');

const restream = function(proxyReq, req, res, options) {
    if (req.body) {
        let bodyData = JSON.stringify(req.body);
        // in case if content-type is application/x-www-form-urlencoded -> we need to change to application/json
        proxyReq.setHeader('Content-Type','application/json');
        proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
        // stream the content
        proxyReq.write(bodyData);
    }
};

module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:5000/', ws: true}));
    app.use(proxy('/api/*', { target: 'http://localhost:5000/', ws: true}));
};
