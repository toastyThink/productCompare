const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileImage = new Schema({
    url: {"bsonType": String, required: true},
    description: {"bsonType": String},
    alt: {"bsonType": String, default: "An Image of the person's profile", required: true}
});

const profileSchema = new Schema({
    name: {
        "bsonType": String,
        required: true,
    },
    birthday: {
        "bsonType": Date,
        required: true,
    },
    gender: {
        "bsonType": String,
        enum: ['Male', 'Female', 'Non-binary',
              'Gender Fluid','Agender', 'Other', 'custom'],
        required: true,
    },
    images: [profileImage],
    favoriteProducts: [],
    //     { "bsonType": Schema.Types.ObjectId,
    //     ref: "Favorites"},
    // 
    
}); 

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;