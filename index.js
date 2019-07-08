const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require("body-parser");

const keys = require('./config/keys');

require('./models/User');
require('./models/Survey');
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
app.use(bodyParser.text());
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

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    // Express will serve up the index.html file if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}


// *** Express listen
app.listen(port, () => {
    console.log('#### Server is running on port: ', port);
});
