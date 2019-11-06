'use strict';

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const CONSTANT = require('./../../constants')

/**
 * @typedef User
 * @property {enum} role.required - User role - eg: admin, editor
 * @property {name} name.required
 * @property {string} email.required - Provide a validate email format - eg: name@domain
 * @property {string} password.required
 * @property {enum} sex - User gender - eg: Male, Female
 * @property {string} profile
 */
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

// Execute before each user.save() call
UserSchema.pre('save', function (next) {
    var user = this

    // Break out if the password hasn't changed
    if (!user.isModified('password')) {
        return next()
    }
  
    // Password changed so we need to hash it
    bcrypt.hash(user.password, CONSTANT.bcryptSaltRound, function(err, hash) {
        if (err) {
            return next(err)
        }

        user.password = hash
        next()
    })
})

UserSchema.methods.verifyPassword = function(password, cb) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
      if (err) {
        return cb(err)
      }

      cb(null, isMatch)
    })
}
  

module.exports = mongoose.model('User', UserSchema)