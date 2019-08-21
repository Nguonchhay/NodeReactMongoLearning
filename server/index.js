const express = require('express')
const path = require('path')
const expressEdge = require('express-edge')

const ENV = require(path.resolve(__dirname, 'config/env.js'))
const CONSTANT = require(path.resolve(__dirname, 'constants/index.js'))

// Create application context
const app = express()

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

// Start serve with predefine port
app.listen(ENV.PORT, () => {
    console.log('Server started on port: ' + ENV.PORT)
})