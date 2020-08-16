const models = require('../models')

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
            const page = req.query.page ? Number(req.query.page) : 1
            const limit = req.query.limit ? Number(req.query.limit) : 10
            const sordBy = req.query.sortBy ? req.query.sortBy : 'createdAt'
            const category = req.query.category ? { category: req.query.category } : undefined

            models.Article.countDocuments({ ...category }, (err, count) => {
                if (err) next()
                models.Article.find({ ...category }).sort({ [sordBy]: 'desc' }).skip(limit * (page - 1)).limit(limit).populate('comments')
                    .then(response => res.send({ data: response, count }))
                    .catch(next)
            })
        }
    },

    post: (req, res, next) => {
        models.Article.create({ ...req.body })
            .then((createdArticle) => res.send(createdArticle))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Article.deleteOne({ _id: id })
            .then(() => res.send('ok'))
            .catch(next)
    }
}