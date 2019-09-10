const bcrypt = require('bcrypt')
const User = require('./../database/models/User')
const CONSTANT = require('./../constants')


const loginForm = (req, res) => {
    req.session.userId = null
    res.render('login')
}

const login = (req, res) => {
    const { email, password } = req.body

    User.findOne({email}, (err, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (isMatch) {
                    // Store user session
                    req.session.userId = user._id

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

const logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect(CONSTANT.url.URL_HOME)
    })
}

module.exports = {
    loginForm,
    login,
    logout
}