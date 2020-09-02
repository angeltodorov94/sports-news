const controllers = require('../controllers/')
const router = require('express').Router()
const { isAuth } = require('../middlewares/auth')

router.post('/', isAuth, controllers.comment.post)

router.delete('/:articleId/:id', isAuth, controllers.comment.delete)

module.exports = router