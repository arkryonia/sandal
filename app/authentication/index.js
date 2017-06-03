const express = require('express')
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const csrf = require('csurf')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({ secret: 'keyboard cat'}))
app.use(cookieParser())
app.use(csrf({ cookie: true }))

app.use(passport.initialize())
app.use(passport.session())
