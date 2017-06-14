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
  res.redirect('/user/list')
})

app.use(auth)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
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
  res.send('error');
});

module.exports = app
