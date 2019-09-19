const bcrypt = require('bcrypt')
const User = require('./../database/models/User')
const path = require('path')

const CONSTANT = require('./../constants')


const listUser = async (req, res) => {
    if (req.session.userId) {
        const users = await User.find({})

        return res.render('users_index', {
            users
        })
    }

    res.redirect(CONSTANT.url.URL_HOME)
}

const createUser = (req, res) => {
    if (req.session.userId) {
        return res.render('users_create', {
            errors: req.flash('errorUserCreate'),
            data: req.flash('userData')[0]
        })
    }
    res.redirect(CONSTANT.url.URL_HOME)
}

const storeUser = async (req, res) => {
    const formData = req.body

    bcrypt.hash(formData.password, CONSTANT.bcryptSaltRound, (err, hash) => {
        let userData = {
            ...formData,
            password: hash
        }

        if (req.files && req.files.profile) {
            const { profile } = req.files
            // Move upload file
            profile.mv(path.resolve(__dirname, '../' + CONSTANT.uploadFilePath + '/' + profile.name), (err) => {
                userData = {
                    ...userData,
                    profile: CONSTANT.readUploadFilePath + '/' + profile.name
                }
                // Store user to database
                User.create(userData, (err, user) => {
                    if (err) {
                        const errorUserCreate = Object.keys(err.errors).map(key => err.errors[key].message)
                        req.flash('errorUserCreate', errorUserCreate)
                        req.flash('userData', req.body)
                        return res.redirect(CONSTANT.url.URL_USER_CREATE)
                    }
                    res.redirect(CONSTANT.url.URL_USER)
                })
            })
        } else {
            // Store user to database
            User.create(userData, (err, user) => {
                if (err) {
                    const errorUserCreate = Object.keys(err.errors).map(key => err.errors[key].message)
                    req.flash('errorUserCreate', errorUserCreate)
                    req.flash('userData', req.body)
                    return res.redirect(CONSTANT.url.URL_USER_CREATE)
                }
                res.redirect(CONSTANT.url.URL_USER)
            })
        }
    })
}

const editUser = async (req, res) => {
    const user = await User.findById(req.params.id)
    return res.render('users_edit', {
        user
    })
}

const deleteUser = (req, res) => {
    User.deleteOne({_id: req.params.id}, (err) => {
        if (err) {
            console.log(err)
        }
        res.redirect(CONSTANT.url.URL_USER)
    })
}

module.exports = {
    listUser,
    createUser,
    storeUser,
    editUser,
    deleteUser
}