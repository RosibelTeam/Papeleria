const express = require('express')
const morgan = require('morgan')
const app = express()


//Settings
app.set('port', process.env.PORT || 5000)

//Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))

module.exports = app