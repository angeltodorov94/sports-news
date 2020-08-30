const { User, Comment, Article } = require('../models')
const mongoose = require('mongoose')
const { createToken, verifyToken } = require('../utils/jwt')
const hashPassword = require('../utils/hashPassword')

module.exports = {
    get: (req, res, next) => {
        User.findById(req.userId).populate('savedArticles')
            .then((user) => res.send(user))
            .catch(next)
    },

    post: {
        register: (req, res, next) => {
            const { email, password } = req.body;
            User.create({ email, password })
                .then((createdUser) => {
                    const token = createToken({ id: createdUser._id })
                    res.header("Authorization", token).send(createdUser)
                })
                .catch(next)
        },

        login: (req, res, next) => {
            const { email, password } = req.body
            User.findOne({ email }).populate('savedArticles')
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(500).send('Wrong email or password!')
                        return
                    }
                    const token = createToken({ id: user._id })
                    res.header("Authorization", token).send(user)
                })
                .catch(next)
        },

        verifyToken: (req, res, next) => {
            const token = req.get('Authorization') || '';
            verifyToken(token)
                .then(response => {
                    User.findById(response.id).populate('savedArticles')
                        .then((user) => {
                            if (user === null) throw new Error("User not found")
                            res.send({ status: true, user })
                        }).catch(err => {
                            res.send({ status: false })
                        })
                })
                .catch(err => {
                    res.send({ status: false })
                })
        },
    },

    patch: async (req, res, next) => {
        let obj = {}
        if (req.body.remove)
            obj = { $pull: { savedArticles: mongoose.mongo.ObjectID(req.body.remove) } }
        else if (req.body.add)
            obj = { $addToSet: { savedArticles: mongoose.mongo.ObjectID(req.body.add) } }
        else
            obj = { ...req.body }

        if (obj.password)
            obj.password = await hashPassword(req.body.password)

        try {
            const user = await User.findByIdAndUpdate(req.userId, { ...obj }, { new: true }).populate('savedArticles').populate('postedComments')
            res.status(200).send(user)
        } catch (error) {
            if (error.code === 11000)
                res.status(500).send('Email is already taken!')
            else res.status(500).send('Something went wrong!')
        }
    },

    delete: async (req, res, next) => {
        try {
            await User.findByIdAndRemove(req.userId)
            res.status(200).send('User deleted!')
        } catch (error) {
            res.status(500).send('Something went wrong!')
        }
    }
}