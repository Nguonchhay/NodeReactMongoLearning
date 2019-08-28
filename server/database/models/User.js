'use strict';

const mongoose = require('mongoose')

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

const User = mongoose.model('User', UserSchema)

module.exports = User