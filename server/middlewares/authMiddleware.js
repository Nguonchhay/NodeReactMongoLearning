const User = require('./../database/models/User')
const CONSTANT = require('./../constants')


module.exports = (req, res, next) => {
    User.findById(req.session.userId, (err, user) => {
        if (err || !user) {
            return res.redirect(CONSTANT.url.URL_HOME)
        }

        next()
    })
}