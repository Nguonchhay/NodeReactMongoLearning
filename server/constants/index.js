const URL_HOME = '/'
const URL_CHART = '/chart'

const URL_LOGIN_FORM = '/login'
const URL_USER_LOGIN = '/users/login'
const URL_USER = '/users'
const URL_USER_CREATE = '/users/create'
const URL_USER_STORE = '/users/store';
const URL_USER_EDIT = '/users/:id/edit'
const URL_USER_UPDATE = '/users/:id/update';
const URL_USER_DELETE = '/users/:id/delete';

const bcryptSaltRound = 10
const uploadFilePath = 'public/uploads'
const readUploadFilePath = '/uploads'

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
        URL_USER_LOGIN
    },
    bcryptSaltRound,
    uploadFilePath,
    readUploadFilePath
}