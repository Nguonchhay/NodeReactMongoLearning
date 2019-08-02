const express = require('express')
const path = require('path')

const ENV = require(path.resolve(__dirname, 'config/env.js'))
const CONSTANT = require(path.resolve(__dirname, 'constants/index.js'))

// Create application context
const app = express()

app.get(CONSTANT.URL_HOME, (req, res) => {
    return res.send('Home page API');
})

app.listen(ENV.PORT, () => {
    console.log('Server started on port: ' + ENV.PORT)
})