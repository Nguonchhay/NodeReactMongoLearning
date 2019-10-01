const { Router } = require('express')
const User = require('./../database/models/User')
const ApiUtil = require('./../utils/apiUtil')
const CONSTANT = require('./../constants')


const apiRouter = Router()
const basePath = '/v1'

apiRouter.get(basePath + '/welcome', (req, res) => {
    return ApiUtil.makeResponse(
        res,
        'API is working.'
    )
})

apiRouter.get(basePath + '/users', async (req, res) => {
    const users = await User.find({})
    return res.json(

    )
})

module.exports = apiRouter