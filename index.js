const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');

require('./models/User');
require('./services/passport');

/*** Mongoose ***/
mongoose.connect(config.MongoUri, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('#### Connected to DB');
});

/*** Run express ***/
const app = express();
const PORT = 5000;
require('./routes/authRoutes')(app);


// *** Express listen
app.listen(PORT, () => {
    console.log('#### Server is running on port: ', PORT);
});
