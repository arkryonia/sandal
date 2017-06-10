// core requirements -----------------------------------------------------------

const express       = require('express')
const path          = require('path')
const passport      = require('passport')
const session       = require('express-session')
const bodyParser    = require('body-parser')
const cookieParser  = require('cookie-parser')
const mongoose      = require('mongoose')
const flash         = require('connect-flash')
const morgan        = require('morgan')
// locale requirements ---------------------------------------------------------
const rootdir = process.cwd()
const route = require('./urls')

const app = express()

// View engine -----------------------------------------------------------------

app.set('view engine', 'pug')
app.set('views', path.join(rootdir, 'app/authentication/templates'))

// passport --------------------------------------------------------------------

require('./config/passport')(passport);

// set middlewares -------------------------------------------------------------

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/user', express.static(path.join(rootdir, 'app/theme/assets')))
app.use(session({secret: 'sdfjhghkqgh5', resave:false, saveUninitialized:true}))
app.use(cookieParser())
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

app.use('/user', route)

module.exports = app
