const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

const ENV = require(path.resolve(__dirname, 'config/env.js'))
const CONSTANT = require(path.resolve(__dirname, 'constants/index.js'))

const router = express.Router()

// Create application context
const app = express()

// Convert the incomming request into middleware and convert to proper request type
app.use(bodyParser.json())

// Apply validation
app.use(expressValidator())

// Apply router
app.use('/api', router)

app.get(CONSTANT.URL_HOME, (req, res) => {
    return res.send('Home page API');
})

app.listen(ENV.PORT, () => {
    console.log('Server started on port: ' + ENV.PORT)
})

// Follow: https://www.freecodecamp.org/news/how-to-make-input-validation-simple-and-clean-in-your-express-js-app-ea9b5ff5a8a7/