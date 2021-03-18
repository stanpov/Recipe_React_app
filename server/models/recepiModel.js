const mongoose = require('mongoose');

const recepiShema = new mongoose.Schema({

    title: {
        type: String
    },
    description: {
        type: String
    },
    comments: [{
      type: mongoose.Types.ObjectId,
      ref: "user"
    }],
    creator: {
        type: String
    },
    imageUrl: {
        type: String
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: "user"
    }]
})

module.exports = mongoose.model('recepi',recepiShema)