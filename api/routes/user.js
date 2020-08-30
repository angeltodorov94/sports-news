const controllers = require('../controllers/')
const router = require('express').Router()
const { isGuest, isAuth } = require('../utils/auth')

router.post('/register', isGuest, controllers.user.post.register)

router.post('/login', isGuest, controllers.user.post.login)

router.post('/verifyToken', controllers.user.post.verifyToken)

router.get('/', isAuth, controllers.user.get)

router.patch('/', isAuth, controllers.user.patch)

router.delete('/', isAuth, controllers.user.delete)

module.exports = router