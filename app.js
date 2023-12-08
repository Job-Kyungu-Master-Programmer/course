//App.js

const Config = require('./Utils/Config')
const express = require('express')
const app = express()
const cors = require('cors')
const dataRouter = require('./Controllers/Controller')
const Logger = require('./Utils/Logger')
const MiddleWare = require('./Utils/Middleware')
const mongoose = require('mongoose')


//Connection to mongodb
mongoose.set('strictQuery', false)
mongoose.connect(Config.MONGODB_URI)
.then(result => {
    Logger.info('connecting to Mongodb')
}).catch(error => {
    Logger.info('Failed connection')
})


//Middleware 
app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(MiddleWare.requestLogger)
app.use('/api/courses', dataRouter)
app.use(MiddleWare.unknow)


module.exports = app