// core requirements -----------------------------------------------------------

const express = require('express')
const path = require('path')
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const csrf = require('csurf') // TODO Config csrf

// locale requirements ---------------------------------------------------------

const route = require('./urls')
const db = require(path.join(process.cwd(), 'config/mongo.js'))

const app = express()
db.run()

// set middlewares -------------------------------------------------------------

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(session({ secret: 'keyboard cat'})) // TODO set session middleware
app.use(cookieParser())
app.use(csrf({ cookie: true }))
app.use('/user', route)

// -----------------------------------------------------------------------------

app.use(passport.initialize())
app.use(passport.session())

module.exports = app
