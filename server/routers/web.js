const express = require('express')


const router = express.Router()
const CONSTANT = require('./../constants')

// Middleware
const authMiddleware = require('./../middlewares/authMiddleware')

// Controllers
const userController = require('./../controllers/userController')
const loginController = require('./../controllers/loginController')
const postController = require('./../controllers/postController')

// Start routing

router.get(CONSTANT.url.URL_HOME, (req, res) => {
    return res.render('index')
})

router.get(CONSTANT.url.URL_CHART, (req, res) => {
    return res.render('chart')
})

router.get(CONSTANT.url.URL_LOGIN_FORM, loginController.loginForm)
router.post(CONSTANT.url.URL_USER_LOGIN, loginController.login)
router.post(CONSTANT.url.URL_LOGOUT, authMiddleware, loginController.logout)

router.get(CONSTANT.url.URL_USER, authMiddleware, userController.listUser)
router.get(CONSTANT.url.URL_USER_CREATE, authMiddleware, userController.createUser)
router.post(CONSTANT.url.URL_USER_STORE, authMiddleware, userController.storeUser)
router.get(CONSTANT.url.URL_USER_EDIT, authMiddleware, userController.editUser)
router.post(CONSTANT.url.URL_USER_DELETE, authMiddleware, userController.deleteUser)

router.get(CONSTANT.url.URL_POSTS, authMiddleware, postController.listPost)
router.get(CONSTANT.url.URL_POSTS_CREATE, authMiddleware, postController.createPost)
router.post(CONSTANT.url.URL_POSTS_STORE, authMiddleware, postController.storePost)

module.exports = router