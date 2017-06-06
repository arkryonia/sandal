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
  read: (req, res, next) => {
    let username = req.params.username
    res.send(`Read user : ${username}`)
  },
  update: (req, res, next) => {
    res.send('Update a user')
  },
  delete: (req, res, next) => {
    res.send('Delete a user')
  }
}
