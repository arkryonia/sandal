const express = require('express')
const urls = express.Router()
const passport = require('passport');

const actions = require('./actions')

urls.get('/list', actions.list)

urls.get('/login', actions.getlogin)

urls.post('/login', passport.authenticate('local-login', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/login',
  failureFlash: true
}))

urls.get('/signup', actions.getsignup)

urls.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signup',
  failureFlash: true
}))

urls.get('/profile', actions.isLoggedIn, actions.profile)

urls.get('/logout', actions.logout)


module.exports = urls;
