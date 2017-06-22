const express   = require('express')
const helmet    = require('helmet')
const app       = express()

const auth = require('./app/authentication/index.js')
const blog = require('./app/blog/index.js')

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

// app.get('/', (req, res) => {
//   console.log(req.app.get('env'));
//   res.redirect('/auth/user/list')
// })

app.use('/', blog)
app.use('/auth', auth)


module.exports = app
