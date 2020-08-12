const router = require('../routes/')

module.exports = (app) => {

    app.use('/api/user', router.user)

    app.use('/api/article', router.article)

    app.use('/api/comment', router.comment)

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
}