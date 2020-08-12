const controllers = require('../controllers/')
const router = require('express').Router()

router.get('/', controllers.article.get.articles)

router.get('/:id', controllers.article.get.article)

router.post('/', controllers.article.post)

// router.post('/register', controllers.user.post.register)

// router.post('/login', controllers.user.post.login)

// router.post('/verifyToken', controllers.user.post.verifyToken)

// router.patch('/:id', controllers.user.patch)

// router.delete('/:id', controllers.user.delete)

module.exports = router