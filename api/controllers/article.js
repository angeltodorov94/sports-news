const { Article } = require('../models')

module.exports = {
    get: {
        article: async (req, res, next) => {
            try {
                const article = await Article.findByIdAndUpdate(req.params.id, { $inc: { clicks: 1 } }, { new: true })
                    .populate({ path: 'comments', populate: { path: 'author', model: 'User' } })

                res.status(200).send(article)
            } catch (error) {
                next(error)
            }
        },

        articles: async (req, res, next) => {
            const page = req.query.page ? Number(req.query.page) : 1
            const limit = req.query.limit ? Number(req.query.limit) : 10
            const sordBy = req.query.sortBy ? req.query.sortBy : 'createdAt'
            const category = req.query.category ? { category: req.query.category } : undefined
            try {
                const count = await Article.countDocuments({ ...category })
                const data = await Article.find({ ...category }).sort({ [sordBy]: 'desc' })
                    .skip(limit * (page - 1)).limit(limit).populate('comments')

                res.status(200).send({ data, count })
            } catch (error) {
                next(error)
            }
        }
    }
}