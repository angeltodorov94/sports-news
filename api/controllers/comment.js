const models = require('../models')

module.exports = {
    post: (req, res, next) => {
        const { content, articleId, userId } = req.body
        models.Comment.create({ content, author: userId, articleId })
            .then((comment) => {
                models.User.findByIdAndUpdate({ _id: userId }, { $addToSet: { postedComments: comment._id } }, (err, res) => {
                    if (err) next(err)
                })
                models.Article.findByIdAndUpdate({ _id: articleId }, { $addToSet: { comments: comment._id } }, (err, res) => {
                    if (err) next(err)
                })
                res.send(comment)
            })
            .catch(next)
    },

    delete: (req, res, next) => {
        const { id } = req.params
        models.Comment.findByIdAndDelete({ _id: id })
            .then(() => res.status(200).send('Ok'))
            .catch(next)
    }
}