require('dotenv').config()
const expressSession = require('express-session')
const connnectMongo = require('connect-mongo')
const mongoose = require('mongoose')


const database = (app) => {
    // MongoDB connection
    mongoose.set('useCreateIndex', true)
    mongoose.set('useUnifiedTopology', true)
    mongoose.set('useNewUrlParser', true)
    mongoose.connect(process.env.MONGODB_URI + '/' + process.env.MONGODB_DB)

    // Use session
    const mongoStore = connnectMongo(expressSession)
    app.use(expressSession({
        secret: process.env.SESSION_SECRET,
        store: new mongoStore({
            mongooseConnection: mongoose.connection
        }),
        proxy: true,
        resave: true,
        saveUninitialized: true
    }))
}

module.exports = database