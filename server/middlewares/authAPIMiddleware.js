const passport = require('passport')
const BasicStrategy = require('passport-http').BasicStrategy

const User = require('./../database/models/User')


passport.use(new BasicStrategy(
    (email, password, next) => {
        User.findOne({email}, (err, user) => {
            if (err) {
                return next(err)
            }

            if (!user) {
                return next(null, false)
            }

            user.verifyPassword(password, (err, isMatch) => {
                if (err) {
                    return next(err)
                }

                if (!isMatch) {
                    return next(null, false)
                }

                return next(null, user)
            })
        })
    }
))

module.exports = {
    isAuthenticated: passport.authenticate('basic', { session: false })
}