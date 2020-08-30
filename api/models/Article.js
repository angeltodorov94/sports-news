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
    clicks: {
        type: Number,
        default: 0
    },
    comments: [{
        type: 'ObjectId',
        ref: 'Comment'
    }]
}, { timestamps: true })

module.exports = mongoose.model('Article', ArticleSchema)