const controllers = require('../controllers/')
const router = require('express').Router()
const { isGuest, isAuth } = require('../middlewares/auth')
const { loginCheck, registerCheck } = require('../middlewares/validators')
const validationResult = require('../middlewares/validationResult')

router.post('/register', [isGuest, registerCheck, validationResult], controllers.user.post.register)

router.post('/login', [isGuest, loginCheck, validationResult], controllers.user.post.login)

router.post('/verifyToken', controllers.user.post.verifyToken)

router.get('/', isAuth, controllers.user.get)

router.patch('/', isAuth, controllers.user.patch)

router.delete('/', isAuth, controllers.user.delete)

module.exports = router