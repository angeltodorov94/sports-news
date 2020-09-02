const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 8,
        required: true
    },
    profilePicture: {
        type: String,
        default: 'default-profile-picture_zjrzyv'
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    savedArticles: [{
        type: 'ObjectId',
        ref: 'Article'
    }],
    postedComments: [{
        type: 'ObjectId',
        ref: 'Comment'
    }]
})

UserSchema.methods = {
    matchPassword: function (password) {
        return bcrypt.compare(password, this.password)
    }
}

UserSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) { next(err); return }
                this.password = hash
                next()
            })
        })
        return
    }
    next()
})

module.exports = mongoose.model('User', UserSchema)