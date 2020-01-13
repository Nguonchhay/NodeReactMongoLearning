require('dotenv').config()

const express = require('express')
const connnectFlash = require('connect-flash')
const cloudinary = require('cloudinary')
const passport = require('passport')

// Create application context
const app = express()

// Database and session
require('./config/db')(app)

// Cloudinary config
cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_NAME
})

// User Passport
app.use(passport.initialize())

// Flash message
app.use(connnectFlash())

// Template engine
require('./config/template')(app)

// File upload
require('./config/fileUpload')(app)

// Routers
const routers = require('./routers')
app.use('/', routers.webRouter)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routers.apiRouter)

// 404 page
app.use((req, res) => res.render('404'))

// Start serve with predefine port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
