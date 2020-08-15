const controllers = require('../controllers/')
const router = require('express').Router()

router.get('/', controllers.article.get.articles)

router.get('/:id', controllers.article.get.article)

router.post('/', controllers.article.post)

router.delete('/:id', controllers.article.delete)

// router.patch('/:id', controllers.article.patch)

module.exports = router