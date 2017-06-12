const express = require('express')
const csrf = require('csurf')
const urls = express.Router()
const passport = require('passport');

const actions = require('./actions')

urls.get('/list', actions.list)
urls.get('/login', actions.getlogin)
urls.post('/login', actions.postlogin)
urls.get('/signup', actions.getsignup)
urls.post('/signup', actions.postsignup)

urls.get('/profile', actions.isLoggedIn, actions.profile)

urls.get('/logout', actions.logout)


module.exports = urls;
