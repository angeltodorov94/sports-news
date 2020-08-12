const env = process.env.NODE_ENV || 'development'

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: 'mongodb+srv://acho:Angel1994@achoprojects-yrot1.mongodb.net/sports-news?retryWrites=true&w=majority',
        authCookieName: 'sn-auth-token'
    },
    production: {}
};

module.exports = config[env]