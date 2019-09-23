const express = require('express')
const expressEdge = require('express-edge')
const edge = require('edge.js')


const template = (app) => {
    app.use(expressEdge)
    app.set('views', `${__dirname}/../views`)
    
    // Register Edge middleware to share global variables
    app.use('*', (req, res, next) => {
        edge.global('auth', req.session.userId)
        next()
    })

    // Configure stattic assets
    app.use(express.static('public'))
}

module.exports = template