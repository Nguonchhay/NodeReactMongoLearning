const { Router } = require('express')
const CONSTANT = require('./../constants')


const apiRouter = Router()
const basePath = '/v1'

apiRouter.get(basePath + '/welcome', (req, res) => {
    return res.json({
        'message': 'API route works!'
    })
})

module.exports = apiRouter