const bcrypt = require('bcrypt')
const User = require('./../database/models/User')
const CONSTANT = require('./../constants')


const loginForm = (req, res) => {
    res.render('login')
}

const login = (req, res) => {
    const { email, password } = req.body

    User.findOne({email}, (err, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (isMatch) {
                    return res.redirect(CONSTANT.url.URL_USER)
                } else {
                    return res.redirect(CONSTANT.url.URL_LOGIN_FORM)
                }
            })
        } else {
            return res.redirect(CONSTANT.url.URL_LOGIN_FORM)
        }
    })
}

module.exports = {
    loginForm,
    login
}