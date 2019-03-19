const express = require('express');
const router = express.Router();

require('./services/passport');

// *** Run express
const app = express();
app.use(router);

require('./routes/authRoutes')(app, router);
const PORT = 5000;

// *** Express listen
app.listen(PORT, () => {
    console.log('#### Server is running on port: ', PORT);
});
