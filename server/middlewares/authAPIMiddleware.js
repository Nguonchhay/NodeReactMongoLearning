const passport = require('passport')
const BasicStrategy = require('passport-http').BasicStrategy

const OAuthClient = require('./../database/models/OAuthClient')


passport.use('client-basic', new BasicStrategy(
    (clientId, clientSecret, next) => {
        OAuthClient.findOne({client_id: clientId}, (err, oauthClient) => {
            if (err) {
                return next(err)
            }

            if (!oauthClient || oauthClient.clientSecret !== clientSecret) {
                return next(null, false)
            }

            return next(null, oauthClient)
        })
    }
))

module.exports = {
    isClientAuthenticated: passport.authenticate('client-basic', { session: false })
}