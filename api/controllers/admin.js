const mongoose = require('mongoose')
const { User, Article, Comment } = require('../models')

module.exports = {
    get: {
        user: async (req, res, next) => {
            try {
                const users = await User.find()
                res.status(200).send(users)
            } catch (error) {
                res.status(500).send('Something went wrong!')
            }
        },

        article: async (req, res, next) => {
            try {
                const articles = await Article.find()
                res.status(200).send(articles)
            } catch (error) {
                res.status(500).send('Something went wrong!')
            }
        }
    },

    post: {
        article: async (req, res, next) => {
            try {
                const article = await Article.create({ ...req.body })
                res.status(201).send(article)
            } catch (error) {
                // validation some other error
                res.status(500).send('Something went wrong!')
            }
        }
    },

    patch: {
        user: async (req, res, next) => {
            try {
                await User.findByIdAndUpdate(req.params.id, { ...req.body })
                res.status(200).send('User updated successfully')
            } catch (error) {
                res.status(500).send('Something went wrong!')
            }
        }
    },

    delete: {
        user: async (req, res, next) => {
            try {
                await User.findByIdAndRemove(req.params.id)
                res.status(200).send('User deleted!')
            } catch (error) {
                res.status(500).send('Something went wrong!')
            }
        },

        article: async (req, res, next) => {
            try {
                const article = await Article.findByIdAndRemove(req.params.id).populate('comments')
                article.comments.forEach(async x => {
                    await User.findByIdAndUpdate(x.author, { $pull: { postedComments: x._id } })
                    await Comment.findByIdAndRemove(x._id)
                })
                res.status(200).send('Article deleted successfully')
            } catch (error) {
                res.status(500).send('Something went wrong!')
            }
        }
    }
}