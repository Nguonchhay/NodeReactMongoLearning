const mongoose = require('mongoose')

const OAuthCodeSchema = mongoose.Schema({
    value: {
        type: String,
        require: true
    },
    redirectUrl: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        require: true
    },
    clientId: {
        type: String,
        require: true
    }
})

module.exports = module.module('OAuthCode', OAuthCodeSchema)