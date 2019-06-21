const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

/*** Mongoose ***/
mongoose.connect(keys.mongoUri, { useNewUrlParser: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log('#### Connected to DB');
// });


/*** Run express ***/
const app = express();
app.use(require("body-parser").text());
app.use(cookieParser());
app.use(cookieSession({
    name: 'sSs',
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());


let port = process.env.PORT;
if (port == null || port == "") {
    port = 5000;
}

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);


// *** Express listen
app.listen(port, () => {
    console.log('#### Server is running on port: ', port);
});
