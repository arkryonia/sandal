const express = require('express')
const port = 2000

const app = express()

const auth = require('./app/authentication/index.js')

app.get('/', (req, res) => {
  res.redirect('/user/list')
})

app.use(auth)

app.listen(port, (err) => {
  console.log('Server is up and running on', port)
})
