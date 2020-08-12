const controllers = require('../controllers/')
const router = require('express').Router()

router.get('/', controllers.user.get)

router.get('/:id', controllers.user.get)

router.post('/register', controllers.user.post.register)

router.post('/login', controllers.user.post.login)

router.post('/verifyToken', controllers.user.post.verifyToken)

router.patch('/:id', controllers.user.patch)

router.delete('/:id', controllers.user.delete)

module.exports = router