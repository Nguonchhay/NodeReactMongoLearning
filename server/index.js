require('dotenv').config()

const express = require('express')
const expressEdge = require('express-edge')
const edge = require('edge.js')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const expressSession = require('express-session')
const connnectMongo = require('connect-mongo')
const connnectFlash = require('connect-flash')
const cloudinary = require('cloudinary')


const routers = require('./routers/web')

// Create application context
const app = express()

// MongoDB connection
mongoose.connect(process.env.MONGO_URI + '/' + process.env.MONGO_DB)

// Cloudinary config
cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_NAME
})

// Use session
const mongoStore = connnectMongo(expressSession)
app.use(expressSession({
    secret: process.env.SESSION_SECRET,
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

// Routers
app.use('/', routers)

app.use((req, res) => res.render('404'))

// Start serve with predefine port
app.listen(process.env.PORT, () => {
    console.log('Server started on port: ' + process.env.PORT)
})