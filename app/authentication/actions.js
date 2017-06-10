const User = require('./models')

module.exports = {
  list: (req, res, next) =>{
    User.find((err, users) => {
      if (err) next(err)
      res.render('index', {users: users})
    })
  },
  getlogin: (req, res, next) => {
    res.render('login', { message: req.flash('loginMessage')})
  },
  postlogin: (req, res, next) => {

  },
  getsignup: (req, res, next) => {
    res.render('signup', { message: req.flash('signupMessage') })
  },
  postsignup: (req, res, next) => {
    res.render('signup', { message: req.flash('signupMessage') })
  },
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
