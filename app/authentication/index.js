// core requirements -----------------------------------------------------------

const express = require('express')
const path = require('path')
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
// const csrf = require('csurf') // TODO Config csrf

// locale requirements ---------------------------------------------------------
const rootdir = process.cwd()
const route = require('./urls')

const app = express()

// View engine -----------------------------------------------------------------

app.set('view engine', 'pug')
app.set('views', path.join(rootdir, 'app/authentication/templates'))

// set middlewares -------------------------------------------------------------

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/user', express.static(path.join(rootdir, 'app/theme/assets')))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
})) // TODO set session middleware
app.use(cookieParser())
// app.use(csrf({ cookie: true }))
app.use('/user', route)

// -----------------------------------------------------------------------------

app.use(passport.initialize())
app.use(passport.session())

module.exports = app
