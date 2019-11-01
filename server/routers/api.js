const { Router } = require('express')
const ApiUtil = require('./../utils/apiUtil')
const userAPIController = require('./../api/UserAPIController')
const oauthClientAPIController = require('./../api/OauthClientAPIController')
const CONSTANT = require('./../constants')


const apiRouter = Router()
const basePath = '/v1'

apiRouter.get(basePath + '/welcome', (req, res) => {
    return ApiUtil.makeResponse(
        res,
        'API is working.'
    )
})

/**
 * API Users
 */
apiRouter.route(ApiUtil.apiUrl(CONSTANT.url.API_USERS))
    .get(userAPIController.listUser)
    .post(userAPIController.storeUser)

apiRouter.route(ApiUtil.apiUrl(CONSTANT.url.API_USERS + '/:id'))
    .get(userAPIController.detailUser)
    .put(userAPIController.updateUser)

/**
 * API OAuth Clients
 */
apiRouter.route(ApiUtil.apiUrl(CONSTANT.url.API_OAUTH_CLIENTS))
    .get(oauthClientAPIController.listClient)
    .post(oauthClientAPIController.storeClient)

module.exports = apiRouter