const User = require('./../database/models/User')
const ApiUtil = require('./../utils/apiUtil')


const listUser = async (req, res) => {
    const users = await User.find({})

    return ApiUtil.makeResponse(
        res,
        'User list',
        users
    )
}

const detailUser = async (req, res) => {
    const user = await User.findById(req.params.id)

    return ApiUtil.makeResponse(
        res,
        'User detail',
        [user]
    )
}

module.exports = {
    listUser,
    detailUser
}