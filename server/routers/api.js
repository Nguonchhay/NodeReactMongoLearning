const { Router } = require('express')
const ApiUtil = require('./../utils/apiUtil')
const userAPIController = require('./../api/UserAPIController')
const CONSTANT = require('./../constants')


const apiRouter = Router()
const basePath = '/v1'

apiRouter.get(basePath + '/welcome', (req, res) => {
    return ApiUtil.makeResponse(
        res,
        'API is working.'
    )
})

apiRouter.get(ApiUtil.apiUrl(CONSTANT.url.API_USER_LIST), userAPIController.listUser)
apiRouter.get(ApiUtil.apiUrl(CONSTANT.url.API_USER_DETAIL), userAPIController.detailUser)
apiRouter.put(ApiUtil.apiUrl(CONSTANT.url.API_USER_DETAIL), userAPIController.updateUser)

module.exports = apiRouter