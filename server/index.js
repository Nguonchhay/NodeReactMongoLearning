const express = require('express')
const path = require('path')

const ENV = require(path.resolve(__dirname, 'config/env.js'))
const CONSTANT = require(path.resolve(__dirname, 'constants/index.js'))

// Create application context
const app = express()

// Configure stattic assets
app.use(express.static('public'))

// Start routing

app.get(CONSTANT.url.URL_HOME, (req, res) => {
    return res.sendFile(path.resolve(__dirname, 'pages/index.html'))
})

// Start serve with predefine port
app.listen(ENV.PORT, () => {
    console.log('Server started on port: ' + ENV.PORT)
})