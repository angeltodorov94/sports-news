const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        match: [/\S+@\S+\.\S+/, 'Email is not valid!'],
        required: true,
        unique: true
    },
    password: {
        type: String,
        match: [/[a-zA-Z0-9]+/, 'Password is not valid!'],
        minlength: 8,
        required: true
    },
    username: {
        type: String,
        default: ''
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