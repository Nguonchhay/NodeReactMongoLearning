const mongoose = require('mongoose')


const OAuthClientSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Name is required']
    },
    client_id: {
        type: String,
        require: true
    },
    client_secret: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('OAuthClient', OAuthClientSchema)