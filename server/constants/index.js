const URL_HOME = '/'
const URL_CHART = '/chart'

const URL_LOGIN_FORM = '/login'
const URL_LOGOUT = '/logout'
const URL_USER_LOGIN = '/users/login'
const URL_USER = '/users'
const URL_USER_CREATE = '/users/create'
const URL_USER_STORE = '/users/store';
const URL_USER_EDIT = '/users/:id/edit'
const URL_USER_UPDATE = '/users/:id/update'
const URL_USER_DELETE = '/users/:id/delete'

const URL_POSTS = '/posts'
const URL_POSTS_CREATE = '/posts/create'
const URL_POSTS_STORE = '/posts'
const URL_POSTS_EDIT = '/posts/:id/edit'
const URL_POSTS_UPDATE = '/posts/:id/update'
const URL_POSTS_DELETE = '/posts/:id/delete'

const bcryptSaltRound = 10
const uploadFilePath = 'public/uploads'
const readUploadFilePath = '/uploads'

// API constants
const API_USER_LIST = '/users'
const API_USER_DETAIL = '/users/:id'

module.exports = {
    url: {
        URL_HOME,
        URL_CHART,
        URL_USER,
        URL_USER_CREATE,
        URL_USER_STORE,
        URL_USER_EDIT,
        URL_USER_UPDATE,
        URL_USER_DELETE,
        URL_LOGIN_FORM,
        URL_USER_LOGIN,
        URL_LOGOUT,
        URL_POSTS,
        URL_POSTS_CREATE,
        URL_POSTS_STORE,
        URL_POSTS_EDIT,
        URL_POSTS_UPDATE,
        URL_POSTS_DELETE,
        
        API_USER_LIST,
        API_USER_DETAIL
    },
    bcryptSaltRound,
    uploadFilePath,
    readUploadFilePath
}