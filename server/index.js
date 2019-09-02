const express = require('express')
const expressEdge = require('express-edge')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const fileUpload = require('express-fileupload')

const ENV = require(path.resolve(__dirname, 'config/env'))
const CONSTANT = require(path.resolve(__dirname, 'constants'))

// Controllers
const userController = require('./controllers/userController')

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

// Custom middleware
const userCreatedMiddleware = (req, res, next) => {
    if (!req.body.name || !req.body.email || !req.body.password || !req.body.confirmPassword || !req.body.sex) {
        return res.redirect(CONSTANT.url.URL_USER_CREATE)
    }
    next()
}

app.use(CONSTANT.url.URL_USER_STORE, userCreatedMiddleware)

// Start routing

app.get(CONSTANT.url.URL_HOME, (req, res) => {
    return res.render('index')
})

app.get(CONSTANT.url.URL_CHART, (req, res) => {
    return res.render('chart')
})

app.get(CONSTANT.url.URL_USER, userController.listUser)
app.get(CONSTANT.url.URL_USER_CREATE, userController.createUser)
app.post(CONSTANT.url.URL_USER_STORE, userController.storeUser)
app.get(CONSTANT.url.URL_USER_EDIT, userController.editUser)
app.post(CONSTANT.url.URL_USER_DELETE, userController.deleteUser)

// Start serve with predefine port
app.listen(ENV.PORT, () => {
    console.log('Server started on port: ' + ENV.PORT)
})