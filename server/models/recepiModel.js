const mongoose = require('mongoose');

const recepiShema = new mongoose.Schema({

    title: {
        type: String
    },
    description: {
        type: String
    },
    comments: [],
    creator: {
        type: String
    },
    imageUrl: {
        type: String
    },
    likes: []
})

module.exports = mongoose.model('recepi',recepiShema)