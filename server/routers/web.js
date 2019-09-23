const { Router } = require('express')
const CONSTANT = require('./../constants')

const webRouter = Router()

// Middleware
const authMiddleware = require('./../middlewares/authMiddleware')

// Controllers
const userController = require('./../controllers/userController')
const loginController = require('./../controllers/loginController')
const postController = require('./../controllers/postController')

// webRouter middleware that happen all routes
webRouter.use((req, res, next) => {
    console.log(req.method, req.url);

    next()
})

webRouter.get(CONSTANT.url.URL_HOME, (req, res) => {
    return res.render('index')
})

webRouter.get(CONSTANT.url.URL_CHART, (req, res) => {
    return res.render('chart')
})

webRouter.get(CONSTANT.url.URL_LOGIN_FORM, loginController.loginForm)
webRouter.post(CONSTANT.url.URL_USER_LOGIN, loginController.login)
webRouter.post(CONSTANT.url.URL_LOGOUT, authMiddleware, loginController.logout)

webRouter.get(CONSTANT.url.URL_USER, authMiddleware, userController.listUser)
webRouter.get(CONSTANT.url.URL_USER_CREATE, authMiddleware, userController.createUser)
webRouter.post(CONSTANT.url.URL_USER_STORE, authMiddleware, userController.storeUser)
webRouter.get(CONSTANT.url.URL_USER_EDIT, authMiddleware, userController.editUser)
webRouter.post(CONSTANT.url.URL_USER_DELETE, authMiddleware, userController.deleteUser)

webRouter.get(CONSTANT.url.URL_POSTS, authMiddleware, postController.listPost)
webRouter.get(CONSTANT.url.URL_POSTS_CREATE, authMiddleware, postController.createPost)
webRouter.post(CONSTANT.url.URL_POSTS_STORE, authMiddleware, postController.storePost)

module.exports = webRouter