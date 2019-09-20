const express = require('express')
const expressEdge = require('express-edge')
const edge = require('edge.js')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const fileUpload = require('express-fileupload')
const expressSession = require('express-session')
const connnectMongo = require('connect-mongo')
const connnectFlash = require('connect-flash')

const ENV = require(path.resolve(__dirname, 'config/env'))
const CONSTANT = require(path.resolve(__dirname, 'constants'))

// Middleware
const authMiddleware = require('./middlewares/authMiddleware')

// Controllers
const userController = require('./controllers/userController')
const loginController = require('./controllers/loginController')
const postController = require('./controllers/postController')

// Create application context
const app = express()

// MongoDB connection
mongoose.connect(ENV.mongo.uri + '/' + ENV.mongo.db)

// Use session
const mongoStore = connnectMongo(expressSession)
app.use(expressSession({
    secret: ENV.sessionSecret,
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    })
}))

// Flash message
app.use(connnectFlash())

// Integrate template engihe
app.use(expressEdge)
app.set('views', `${__dirname}/views`)

// Register Edge middleware to share global variables
app.use('*', (req, res, next) => {
    edge.global('auth', req.session.userId)
    next()
})

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

app.get(CONSTANT.url.URL_LOGIN_FORM, loginController.loginForm)
app.post(CONSTANT.url.URL_USER_LOGIN, loginController.login)
app.post(CONSTANT.url.URL_LOGOUT, authMiddleware, loginController.logout)

app.get(CONSTANT.url.URL_USER, authMiddleware, userController.listUser)
app.get(CONSTANT.url.URL_USER_CREATE, authMiddleware, userController.createUser)
app.post(CONSTANT.url.URL_USER_STORE, authMiddleware, userController.storeUser)
app.get(CONSTANT.url.URL_USER_EDIT, authMiddleware, userController.editUser)
app.post(CONSTANT.url.URL_USER_DELETE, authMiddleware, userController.deleteUser)

app.get(CONSTANT.url.URL_POSTS, authMiddleware, postController.listPost)
app.get(CONSTANT.url.URL_POSTS_CREATE, authMiddleware, postController.createPost)
app.post(CONSTANT.url.URL_POSTS_STORE, authMiddleware, postController.storePost)

app.use((req, res) => res.render('404'))

// Start serve with predefine port
app.listen(ENV.PORT, () => {
    console.log('Server started on port: ' + ENV.PORT)
})