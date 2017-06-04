const mongoose = require('mongoose')

// TODO Set db name as environment variable

exports.run = () => {
  mongoose.connect('mongodb://localhost/sandal', (err) => {
    if (err) console.log('mongodb connection failed ', err)
    console.log('mongodb is up and running ...');
  })
}
