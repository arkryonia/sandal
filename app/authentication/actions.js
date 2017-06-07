const User = require('./models')

module.exports = {
  list: (req, res, next) =>{
    User.find((err, users) => {
      if (err) next(err)
      res.render('index', {users: users})
    })
  },
  getcreate: (req, res, next) => {
    res.render('create')
  },
  postcreate: (req, res, next) => {
    var user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })

    User.create(user, (err, user) => {
      if(err) next(err)
      res.redirect('/user/list')
    })
  },
  getlogin: (req, res, next) => {
    res.render('login')
  },
  postlogin: (req, res, next) => {
    const username = req.body.username
    User.findOne({username: username}, (err, user) => {
      if (err) next(err)
      res.send(user)
      user.verifyPassword(req.body.password, (err, valid) => {
        if (err) next(err)
        if (valid) {
          console.log('valid ------------------:)')
        } else {
          console.log('invalid ----------------:((');
        }
      })
    })
  },
  read: (req, res, next) => {
    User.findOne({username: req.params.username}, (err, user) => {
      res.send(`Read user : ${user.username}`)
    })
  },
  update: (req, res, next) => {
    res.send('Update a user')
  },
  delete: (req, res, next) => {
    res.send('Delete a user')
  }
}
