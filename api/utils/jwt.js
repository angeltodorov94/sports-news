const jwt = require('jsonwebtoken')
const secret = 'fsdf67f7s9f7s8f7sdfs86f9s6fs9d'

function createToken(data) {
    return jwt.sign(data, secret, { expiresIn: '24h' })
}

function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, data) => {
            if (err) { reject(err); return; }
            resolve(data)
        })
    })
}

module.exports = {
    createToken,
    verifyToken
}