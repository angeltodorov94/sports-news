const { User, Article, Comment } = require('../models')

module.exports = {
    post: async (req, res, next) => {
        const { content, articleId } = req.body
        try {
            const comment = await Comment.create({ content, author: req.userId, articleId })
            await User.findByIdAndUpdate(req.userId, { $addToSet: { postedComments: comment._id } })
            await Article.findByIdAndUpdate(articleId, { $addToSet: { comments: comment._id } })
            res.status(200).send(comment)
        } catch (error) {
            next(error)
        }
    },

    delete: async (req, res, next) => {
        const { articleId, id } = req.params
        try {
            const deletedComment = await Comment.findByIdAndRemove({ _id: id })
            await Article.findByIdAndUpdate(articleId, { $pull: { comments: deletedComment._id } })
            await User.findByIdAndUpdate(req.userId, { $pull: { postedComments: deletedComment._id } })
            res.status(200).send('Comment Deleted')
        } catch (error) {
            next(error)
        }
    }
}