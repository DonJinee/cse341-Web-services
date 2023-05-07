const mongoose = require('mongoose');

const contactsSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    favoriteColor: {
        type: String
    },
    birthday: {
        type: String
    }
});

module.exports = mongoose.model('Contacts', contactsSchema);