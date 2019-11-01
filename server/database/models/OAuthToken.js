const mongoose = require('mongoose')

const OAuthTokenSchema = mongoose.Schema({
    value: {
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

module.exports = mongoose.model('oauthToken', OAuthTokenSchema)