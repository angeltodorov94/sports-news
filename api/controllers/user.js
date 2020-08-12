const models = require('../models')
const mongoose = require('mongoose')
const utils = require('../utils')
const bcrypt = require('bcrypt')

module.exports = {
    get: (req, res, next) => {
        const search = req.params.id ? { _id: req.params.id } : undefined
        models.User.find(search).populate('savedArticles')
            .then((user) => res.send(user))
            .catch(next)
    },

    post: {
        register: (req, res, next) => {
            const { email, password } = req.body;
            models.User.create({ email, password })
                .then((createdUser) => {
                    const token = utils.jwt.createToken({ id: createdUser._id })
                    res.header("Authorization", token).send(createdUser)
                })
                .catch(next)
        },

        login: (req, res, next) => {
            const { email, password } = req.body
            models.User.findOne({ email }).populate('savedArticles')
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(500).send('Wrong email or password!')
                        return
                    }
                    const token = utils.jwt.createToken({ id: user._id })
                    res.header("Authorization", token).send(user)
                })
                .catch(next)
        },

        verifyToken: (req, res, next) => {
            const token = req.body.token || '';

            utils.jwt.verifyToken(token)
                .then(response => {
                    models.User.findById(response.id).populate('savedArticles')
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
        const id = req.params.id
        let hash = await bcrypt.genSalt(10)
        if (req.body.password) {
            hash = await bcrypt.hash(req.body.password, hash)
            req.body.password = hash
        }

        let obj = {}
        if (req.body.remove)
            obj = { $pull: { savedArticles: mongoose.mongo.ObjectID(req.body.remove) } }
        else if (req.body.add)
            obj = { $addToSet: { savedArticles: mongoose.mongo.ObjectID(req.body.add) } }
        else
            obj = { ...req.body }

        await models.User.findByIdAndUpdate({ _id: id }, { ...obj }, { new: true }).populate('savedArticles').populate('postedComments')
            .then(updatedUser => res.send(updatedUser))
            .catch(err => {
                if (err.code === 11000)
                    res.status(500).send('Email is already taken!')
                else res.status(500).send('Something went wrong!')
            })
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.User.deleteOne({ _id: id })
            .then(() => {
                models.Comment.deleteMany({ author: mongoose.mongo.ObjectID(id) })
                    .catch(next)
            })
            .catch(next)
    }
}