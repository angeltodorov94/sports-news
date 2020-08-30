const { verifyToken } = require('./jwt')
const User = require('../models/User')

const isGuest = async (req, res, next) => {
    const token = req.get('Authorization')
    try {
        await verifyToken(token)
        res.status(403).send('The User is authorized already!')
    } catch (error) {
        next()
    }
}

const isAuth = async (req, res, next) => {
    const token = req.get('Authorization')
    try {
        const data = await verifyToken(token)
        req.userId = data.id
        next()
    } catch (error) {
        res.status(401).send('The User is not authenticated!')
    }
}

const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId)
    if (user.isAdmin)
        next()
    else
        res.status(403).send('The User is not authorized!')
}

module.exports = {
    isGuest,
    isAuth,
    isAdmin
}