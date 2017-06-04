module.exports = {
  list: (req, res, next) =>{
    res.send('Bonjour ... Oui! Bonjour ...')
  },
  getcreate: (req, res, next) => {
    res.send('Get Create a user')
  },
  postcreate: (req, res, next) => {
    res.send('Post Create a user')
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
