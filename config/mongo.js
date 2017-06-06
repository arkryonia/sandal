const mongoose = require('mongoose')

// TODO Set db name as environment variable

var mongo = {
  connect: () => {
    mongoose.connect('mongodb://localhost/sandal', (err) => {
      if (err) console.log('mongodb connection failed ', err)
      console.log('mongodb is up and running ...');
    })
  }
}

module.exports = mongo
