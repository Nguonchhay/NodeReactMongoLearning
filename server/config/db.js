require('dotenv').config()
const expressSession = require('express-session')
const connnectMongo = require('connect-mongo')
const mongoose = require('mongoose')


const database = (app) => {
    // MongoDB connection
    mongoose.connect(process.env.MONGO_URI + '/' + process.env.MONGO_DB)

    // Use session
    const mongoStore = connnectMongo(expressSession)
    app.use(expressSession({
        secret: process.env.SESSION_SECRET,
        store: new mongoStore({
            mongooseConnection: mongoose.connection
        })
    }))
}

module.exports = database