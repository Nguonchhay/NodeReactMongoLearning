const bcrypt = require('bcrypt')
const path = require('path')
const User = require('./../database/models/User')

const CONSTANT = require('./../constants')


const listUser = async (req, res) => {
    const users = await User.find({})

    return res.render('users_index', {
        users
    })
}

const createUser = (req, res) => {
    return res.render('users_create')
}

const storeUser = async (req, res) => {
    const formData = req.body

    bcrypt.hash(formData.password, CONSTANT.bcryptSaltRound, (err, hash) => {
        let userData = {
            ...formData,
            password: hash
        }

        const { profile } = req.files
        if (profile) {
            // Move upload file
            profile.mv(path.resolve(__dirname, '../' + CONSTANT.uploadFilePath + '/' + profile.name), (err) => {
                userData = {
                    ...userData,
                    profile: CONSTANT.readUploadFilePath + '/' + profile.name
                }
                // Store user to database
                User.create(userData, (err, user) => {
                    if (err) {
                        return res.redirect(CONSTANT.USER_CREATE)
                    }
                    res.redirect(CONSTANT.url.URL_USER)
                })
            })
        } else {
            // Store user to database
            User.create(userData, (err, user) => {
                if (err) {
                    return res.redirect(CONSTANT.USER_CREATE)
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