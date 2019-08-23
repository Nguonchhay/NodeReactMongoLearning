const express = require('express')
const path = require('path')
const expressEdge = require('express-edge')
const mongoose = require('mongoose')

const ENV = require(path.resolve(__dirname, 'config/env.js'))
const CONSTANT = require(path.resolve(__dirname, 'constants/index.js'))

// Create application context
const app = express()

// MongoDB connection
mongoose.connect(ENV.mongo.uri + '/' + ENV.mongo.db)

// Integrate template engihe
app.use(expressEdge)
app.set('views', `${__dirname}/views`)

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

app.get(CONSTANT.url.URL_USER_EDIT, (req, res) => {
    return res.render('users_edit')
})

// Start serve with predefine port
app.listen(ENV.PORT, () => {
    console.log('Server started on port: ' + ENV.PORT)
})