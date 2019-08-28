const express = require('express')
const expressEdge = require('express-edge')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const path = require('path')
const fileUpload = require('express-fileupload')

const ENV = require(path.resolve(__dirname, 'config/env'))
const CONSTANT = require(path.resolve(__dirname, 'constants'))
const User = require(path.resolve(__dirname, 'database/models/User'))

// Create application context
const app = express()

// MongoDB connection
mongoose.connect(ENV.mongo.uri + '/' + ENV.mongo.db)

// Integrate template engihe
app.use(expressEdge)
app.set('views', `${__dirname}/views`)

app.use(bodyParser.json())
// Body parser to format incoming data
app.use(bodyParser.urlencoded({ extended: false }));

// File upload
app.use(fileUpload())

// Configure stattic assets
app.use(express.static('public'))

// Start routing

app.get(CONSTANT.url.URL_HOME, (req, res) => {
    return res.render('index')
})

app.get(CONSTANT.url.URL_CHART, (req, res) => {
    return res.render('chart')
})

app.get(CONSTANT.url.URL_USER, async (req, res) => {
    const users = await User.find({})

    return res.render('users_index', {
        users
    })
})

app.get(CONSTANT.url.URL_USER_CREATE, (req, res) => {
    return res.render('users_create')
})

app.post(CONSTANT.url.URL_USER_STORE, (req, res) => {
    const formData = req.body

    bcrypt.hash(formData.password, CONSTANT.bcryptSaltRound, (err, hash) => {
        let userData = {
            ...formData,
            password: hash
        }

        const { profile } = req.files
        if (profile) {
            // Move upload file
            profile.mv(path.resolve(__dirname, CONSTANT.uploadFilePath + '/' + profile.name), (err) => {
                userData = {
                    ...userData,
                    profile: CONSTANT.readUploadFilePath + '/' + profile.name
                }
                // Store user to database
                User.create(userData, (err, user) => {
                    res.redirect(CONSTANT.url.URL_USER)
                })
            })
        } else {
            // Store user to database
            User.create(userData, (err, user) => {
                res.redirect(CONSTANT.url.URL_USER)
            })
        }
    })
})

app.get(CONSTANT.url.URL_USER_EDIT, async (req, res) => {
    const user = await User.findById(req.params.id)
    return res.render('users_edit', {
        user
    })
})

// Start serve with predefine port
app.listen(ENV.PORT, () => {
    console.log('Server started on port: ' + ENV.PORT)
})