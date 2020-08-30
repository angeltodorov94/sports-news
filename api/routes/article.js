const controllers = require('../controllers/')
const router = require('express').Router()

router.get('/', controllers.article.get.articles)

router.get('/:id', controllers.article.get.article)

module.exports = router