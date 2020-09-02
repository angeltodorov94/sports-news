const router = require('express').Router()
const controllers = require('../controllers/')
const { isAdmin, isAuth } = require('../middlewares/auth')
const validationResult = require('../middlewares/validationResult')
const { articleCheck } = require('../middlewares/validators')

router.get('/article', isAuth, isAdmin, controllers.admin.get.article)

router.post('/article', [isAuth, isAdmin, articleCheck, validationResult], controllers.admin.post.article)

router.delete('/article/:id', isAuth, isAdmin, controllers.admin.delete.article)

router.get('/users', isAuth, isAdmin, controllers.admin.get.user)

router.patch('/user/:id', isAuth, isAdmin, controllers.admin.patch.user)

router.delete('/user/:id', isAuth, isAdmin, controllers.admin.delete.user)

module.exports = router