const controllers = require('../controllers/')
const router = require('express').Router()
const { isAuth } = require('../utils/auth')

router.post('/', isAuth, controllers.comment.post)

router.delete('/:articleId/:id', isAuth, controllers.comment.delete)

module.exports = router