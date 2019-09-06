'use strict';

const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    role: {
        type: String,
        required: [true, 'Role is required']
    },
    name: {
        type: String,
        required: [true, 'Full Name is required']
    },
    email:{
        type: String,
        required: [true, 'Email is required'],
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