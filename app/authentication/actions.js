const passport = require('passport');
const User = require('./models')

module.exports = {
  list: (req, res, next) =>{
    User.find((err, users) => {
      if (err) next(err)
      res.render('index', {users: users, title: 'Authentication'})
    })
  },
  getlogin: (req, res, next) => {
    res.render('login', {
      message: req.flash('loginMessage'),
      title: 'Login user',
      csrfToken: req.csrfToken()
    })
  },
  postlogin: passport.authenticate('local-login', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/login',
    failureFlash: true
  }),
  getsignup: (req, res, next) => {
    res.render('signup', {
      message: req.flash('signupMessage'),
      csrfToken: req.csrfToken()
    })
  },
  postsignup: passport.authenticate('local-signup', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true
  }),
  profile: (req, res, next) => {
    res.render('profile', {user: req.user})
  },
  logout: (req, res) => {
    req.logout()
    res.redirect('/user/login')
  },
  isLoggedIn: (req, res, next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/user/login')
  }
}
