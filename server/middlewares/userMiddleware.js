const CONSTANT = require('./../constants')


const storeUser = (req, res, next) => {
    if (!req.body.name || !req.body.email || !req.body.password || !req.body.confirmPassword || !req.body.sex) {
        return res.redirect(CONSTANT.url.URL_USER_CREATE)
    }
    next()
}

module.exports = {
    storeUser
}