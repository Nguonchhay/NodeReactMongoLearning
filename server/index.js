const express = require('express')
const path = require('path')

const ENV = require(path.resolve(__dirname, 'config/env.js'))

// Create application context
const app = express()

app.listen(3001, () => {
    console.log('Server started on port: ' + ENV.PORT)
})