const { body } = require('express-validator')
const { User } = require('../models')

const commentCheck = [
    body('content')
        .trim()
        .notEmpty().withMessage('The comment is not valid!')
]

const loginCheck = [
    body('email')
        .trim()
        .notEmpty().withMessage('Email was not provided!')
        .isEmail().withMessage('The email is not valid!')
        .normalizeEmail(),
    body('password')
        .notEmpty().withMessage('Password was not provided!')
        .isAlphanumeric().withMessage('The password contains invalid characters!')
        .isLength({ min: 8 }).withMessage('The password must be at least 8 characters long!')
]

const registerCheck = [
    body('email')
        .trim()
        .notEmpty().withMessage('Email was not provided!')
        .isEmail().withMessage('The email is not valid!')
        .normalizeEmail()
        .custom(async (value, { req }) => {
            const result = await User.findOne({ email: value })
            if (result)
                throw new Error('The email is already taken!')
        }),
    body('password')
        .notEmpty().withMessage('Password was not provided!')
        .isAlphanumeric().withMessage('The password contains invalid characters!')
        .isLength({ min: 8 }).withMessage('The password must be at least 8 characters long!'),
    body('rePassword')
        .custom((value, { req }) => {
            if (value !== req.body.password)
                throw new Error("The passwords doesn't match!")
            else return true
        })
]

const articleCheck = [
    body('title')
        .trim()
        .notEmpty().withMessage('Title can not be empty!')
        .isLength({ min: 10 }).withMessage('The title must be at least 10 characters long!'),
    body('content')
        .trim()
        .notEmpty().withMessage('Content can not be empty!')
        .isLength({ min: 50 }).withMessage('The content must be at least 50 characters long!'),
    body('imageUrl')
        .trim()
        .notEmpty().withMessage('Image must be provided!'),
    body('author')
        .trim()
        .notEmpty().withMessage('Author can not be empty!'),
    body('category')
        .trim()
        .notEmpty().withMessage('Category can not be empty!')
]

module.exports = {
    loginCheck,
    registerCheck,
    articleCheck,
    commentCheck
}