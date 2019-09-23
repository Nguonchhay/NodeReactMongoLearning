const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')


const fileConfig = (app) => {
    app.use(bodyParser.json())
    // Body parser to format incoming data
    app.use(bodyParser.urlencoded({ extended: false }));
    
    // File upload
    app.use(fileUpload())
}

module.exports = fileConfig