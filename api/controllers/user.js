const { User } = require('../models')
const mongoose = require('mongoose')
const { createToken, verifyToken } = require('../utils/jwt')
const hashPassword = require('../utils/hashPassword')

module.exports = {
    get: async (req, res, next) => {
        try {
            const user = await User.findById(req.userId).populate('savedArticles')
            res.status(200).send(user)
        } catch (error) {
            res.status(500).send('Something went wrong!')
        }
    },

    post: {
        register: async (req, res, next) => {
            const { email, password } = req.body
            try {
                const user = await User.create({ email, password })
                const token = await createToken({ id: user._id })
                res.header("Authorization", token).send(user)
            } catch (error) {
                res.status(500).send('Something went wrong!')
            }
        },

        login: async (req, res, next) => {
            const { email, password } = req.body
            try {
                const user = await User.findOne({ email }).populate('savedArticles')
                const match = await user.matchPassword(password)
                if (!match) {
                    return res.status(500).send('Wrong email or password!')
                }
                const token = createToken({ id: user._id })
                res.header("Authorization", token).status(200).send(user)
            } catch (error) {
                res.status(500).send('Wrong email or password!')
            }
        },

        verifyToken: async (req, res, next) => {
            const token = req.get('Authorization') || ''
            try {
                const response = await verifyToken(token)
                const user = await User.findById(response.id).populate('savedArticles')
                res.status(200).send(user)
            } catch (error) {
                res.status(200)
            }
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