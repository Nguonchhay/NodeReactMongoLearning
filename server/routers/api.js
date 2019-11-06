const { Router } = require('express')
const ApiUtil = require('./../utils/apiUtil')
const userAPIController = require('./../api/UserAPIController')
const CONSTANT = require('./../constants')

const authAPIMiddleware = require('./../middlewares/authAPIMiddleware')

const apiRouter = Router()

/**
 * @route GET /welcome
 * @group General - Testing APIs
 * 
 * @returns {object} 200 - API is working.
 * @returns {Error}  default - Unexpected error
 */
apiRouter.get(ApiUtil.apiUrl('/welcome'), (req, res) => {
    return ApiUtil.makeResponse(
        res,
        'API is working.'
    )
})

/**
 * API Users
 */
apiRouter.route(ApiUtil.apiUrl(CONSTANT.url.API_USERS))
    .get(authAPIMiddleware.isAuthenticated, userAPIController.listUser)
    .post(authAPIMiddleware.isAuthenticated, userAPIController.storeUser)

apiRouter.route(ApiUtil.apiUrl(CONSTANT.url.API_USERS + '/:id'), authAPIMiddleware.isAuthenticated)
    .get(authAPIMiddleware.isAuthenticated, userAPIController.detailUser)
    .put(authAPIMiddleware.isAuthenticated, userAPIController.updateUser)

module.exports = apiRouter