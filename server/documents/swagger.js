require('dotenv').config()


const options = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'NodeJs + ReactJs + MongoDB',
            version: '1.0.0',
        },
        host: process.env.APP_HOST + ':' + process.env.APP_PORT,
        basePath: '/api/v1',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
		securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: [
        './../routers/**/api.js',
        './../api/*.js',
        './../database/models/*.js'
    ]
}

const expressSwaggerConfig = app => {
    const expressSwagger = require('express-swagger-generator')(app)
    expressSwagger(options)
}

module.exports = expressSwaggerConfig
