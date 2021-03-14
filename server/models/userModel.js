const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    userRecepi: [{
        type: mongoose.Types.ObjectId,
        ref: 'Recepi'
    }]


})

module.exports = mongoose.model('user',userSchema);