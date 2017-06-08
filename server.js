const express   = require('express')

const app       = express()

const auth = require('./app/authentication/index.js')

require('dotenv').config()
require('./config/mongo').connect()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.redirect('/user/list')
})

app.use(auth)

app.listen(port, (err) => {
  console.log('Server is up and running on', port)
})
