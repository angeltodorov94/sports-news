const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 10,
        required: true
    },
    content: {
        type: String,
        minlength: 50,
        required: true
    },
    imageUrl: {
        type: String,
        match: [/^(http:\/\/|https:\/\/)/, 'Image URL is not valid!'],
        required: true
    },
    author: {
        type: String,
        minlength: 1,
        required: true
    },
    category: {
        type: String,
        minlength: 1,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    clicks: {
        type: Number,
        default: 0
    },
    comments: [{
        type: 'ObjectId',
        ref: 'Comment'
    }]
})

module.exports = mongoose.model('Article', ArticleSchema)