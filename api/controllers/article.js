const models = require('../models')
const config = require('../config/config')
const utils = require('../utils')
const bcrypt = require('bcrypt')

module.exports = {
    get: {
        article: (req, res, next) => {
            const obj = { $inc: { clicks: 1 } }
            models.Article.findByIdAndUpdate(req.params.id, obj, { new: true }).populate({ path: 'comments', populate: { path: 'author', model: 'User' } })
                .then((article) => {
                    res.send(article)
                })
                .catch(next)
        },

        articles: (req, res, next) => {
            const limit = req.query.limit ? Number(req.query.limit) : 10
            const sordBy = req.query.sortBy ? req.query.sortBy : 'createdAt'
            const category = req.query.category ? { category: req.query.category.replace('-', ' ') } : undefined

            models.Article.find({ ...category }).sort({ [sordBy]: 'desc' }).limit(limit)
                .then((article) => res.send(article))
                .catch(next)
        }
    },

    post: (req, res, next) => {
        models.Article.create({ ...req.body })
            .then((createdArticle) => res.send(createdArticle))
            .catch(next)
    },

    // put: async (req, res, next) => {
    //     const id = req.params.id
    //     let hash = await bcrypt.genSalt(10)
    //     if (req.body.password) {
    //         hash = await bcrypt.hash(req.body.password, hash)
    //         req.body.password = hash
    //     }
    //     console.log(req.body.password)
    //     await models.User.findByIdAndUpdate({ _id: id }, { ...req.body }, { new: true }, (err, updatedUser) => {
    //         if (err) {
    //             if (err.code === 11000)
    //                 res.status(500).send('Email is already taken!')
    //         } else {
    //             res.send(updatedUser)
    //         }
    //     })
    // },

    // delete: (req, res, next) => {
    //     const id = req.params.id;
    //     models.User.deleteOne({ _id: id })
    //         .then((removedUser) => res.send(removedUser))
    //         .catch(next)
    // }
}