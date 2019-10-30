const _ = require('lodash')
const bcrypt = require('bcrypt')
const User = require('./../database/models/User')
const ApiUtil = require('./../utils/apiUtil')
const CONSTANT = require('./../constants')


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

const updateUser = async (req, res) => {
    let user = await User.findById(req.params.id)
    if (!user) {
        return ApiUtil.makeError(
            res,
            'User was not found',
            404,
            {
                id: req.params.id
            }
        )
    }

    /**
     * Updatable fields
     */
    const fields = ['name', 'email', 'role', 'profile', 'sex'];
    const userData = {}
    fields.forEach(field => {
        if (!_.isEmpty(req.body[field])) {
            userData[field] = req.body[field];
        }
    })

    // Check for password update
    if (!_.isEmpty(req.body['password']) && !_.isEmpty(req.body['confirm_password'])) {
        if (req.body['password'] === req.body['confirm_password']) {
            bcrypt.hash(req.body['password'], CONSTANT.bcryptSaltRound, (err, hash) => {
                userData['password'] = hash

                updateUserIfExist(req.params.id, userData).then(result => {
                    user = result
                    return ApiUtil.makeResponse(
                        res,
                        'User was update successfully',
                        [user]
                    )
                })
            })
        } else {
            return ApiUtil.makeError(
                res,
                'Password and confirm password must be the same',
                400,
                req.body
            )
        }
    } else {
        if (!_.isEmpty(userData)) {
            updateUserIfExist(req.params.id, userData).then(result => {
                user = result
                return ApiUtil.makeResponse(
                    res,
                    'User was update successfully',
                    [user]
                )
            })
        }

        return ApiUtil.makeResponse(
            res,
            'No data to update',
            [user]
        )
    }

}

const updateUserIfExist = async (id, data) => {
    return await User.findByIdAndUpdate(id, data, {new: true}, (err, result) => {
        if (err) {
            return ApiUtil.makeError(
                res,
                'Something went wrong while tring to update user information',
                400,
                req.body
            )
        }
        return result
    });
}

module.exports = {
    listUser,
    detailUser,
    updateUser
}