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
const csrf          = require('csurf')
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
app.use(session({
  secret: 'sdfjhghkqgh5',
  resave:false,
  saveUninitialized:true,
  name: 'sessionId'
}))
app.use(cookieParser())
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
app.use(csrf({ cookie: true}))
app.use(function (req, res, next) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.locals.csrftoken = req.csrfToken();
  next();
});

app.use('/user', route)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Ooops :( Resource Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app
