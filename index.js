const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const config = require('./config/config');
require('./services/passport');

/*** Mongoose ***/
mongoose.connect(config.MongoUri, { useNewUrlParser: true });


/*** Run express ***/
const app = express();
app.use(router);
const PORT = 5000;
require('./routes/authRoutes')(app, router);


// *** Express listen
app.listen(PORT, () => {
    console.log('#### Server is running on port: ', PORT);
});
