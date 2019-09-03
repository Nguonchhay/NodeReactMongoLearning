const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const CONSTANT = require('./../../constants')


const UserSchema = mongoose.Schema({
    role: String,
    name: String,
    email: String,
    password: String,
    sex: String,
    profile: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
})

UserSchema.pre('save', (next) => {
    const user = this
    console.log(user)
    bcrypt.hash(user.password, CONSTANT.bcryptSaltRound, (error, encrypted) => {
        console.log(encrypted)
        user.password = encrypted
        console.log(user)

        next()
    })
})

module.exports = mongoose.model('User', UserSchema)