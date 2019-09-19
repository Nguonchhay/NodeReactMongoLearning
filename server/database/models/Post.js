const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required']
    },
    content: String,
    thumbnail: {
        type: String,
        required: [true, 'Thumbnail is required']
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('Post', PostSchema)