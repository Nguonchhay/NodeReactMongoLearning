'use strict';

const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    role: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
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

module.exports = mongoose.model('User', UserSchema)