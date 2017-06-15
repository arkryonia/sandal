const express   = require('express')
const helmet    = require('helmet')
const app       = express()

const auth = require('./app/authentication/index.js')

require('dotenv').config()
require('./config/mongo').connect()

const port = process.env.DEV || process.env.PROD

app.use(helmet())
app.use((req, res, next) => {
  let now = new Date()
  res.locals.site = 'SountonMe'
  res.locals.date = now.getFullYear()
  next()
})

app.get('/', (req, res) => {
  console.log(req.app.get('env'));
  res.redirect('/user/list')
})

app.use(auth)


module.exports = app
