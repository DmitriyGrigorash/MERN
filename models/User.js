const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: { type: String, default: 0}
});

mongoose.model('users', userSchema);
