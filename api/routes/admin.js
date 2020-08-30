const router = require('express').Router()
const controllers = require('../controllers/')
const { isAdmin, isAuth } = require('../utils/auth')

router.get('/article', isAuth, isAdmin, controllers.admin.get.article)

router.post('/article', isAuth, isAdmin, controllers.admin.post.article)

router.delete('/article/:id', isAuth, isAdmin, controllers.admin.delete.article)

router.get('/users', isAuth, isAdmin, controllers.admin.get.user)

router.patch('/user/:id', isAuth, isAdmin, controllers.admin.patch.user)

router.delete('/user/:id', isAuth, isAdmin, controllers.admin.delete.user)

module.exports = router