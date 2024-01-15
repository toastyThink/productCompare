const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {"bsonType": String},
    email: {"bsonType": String},
    profile: {
        type: Schema.Types.ObjectId,
        ref: "Profile",
    },
    newUser: {"bsonType": Boolean},
});

const User = mongoose.model('User', userSchema);
module.exports = User;