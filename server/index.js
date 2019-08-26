const express = require('express')
const expressEdge = require('express-edge')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const path = require('path')

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

// Body parser to format incoming data
app.use(bodyParser.urlencoded({ extended: true }));

// Configure stattic assets
app.use(express.static('public'))

// Start routing

app.get(CONSTANT.url.URL_HOME, (req, res) => {
    return res.render('index')
})

app.get(CONSTANT.url.URL_CHART, (req, res) => {
    return res.render('chart')
})

app.get(CONSTANT.url.URL_USER, (req, res) => {
    return res.render('users_index')
})

app.get(CONSTANT.url.URL_USER_CREATE, (req, res) => {
    return res.render('users_create')
})

app.post(CONSTANT.url.URL_USER_STORE, (req, res) => {
    const formData = req.body

    bcrypt.hash(formData.password, CONSTANT.bcryptSaltRound, (err, hash) => {
        const userData = {
            role: formData.role,
            name: formData.name,
            email: formData.email,
            password: hash,
            sex: formData.sex,
            profile: ''
        }
        User.create(userData, (err, user) => {
            console.log('Created user: ')
            console.log(user)
            res.redirect(CONSTANT.url.URL_USER)
        })
    })
})

app.get(CONSTANT.url.URL_USER_EDIT, (req, res) => {
    return res.render('users_edit')
})

// Start serve with predefine port
app.listen(ENV.PORT, () => {
    console.log('Server started on port: ' + ENV.PORT)
})