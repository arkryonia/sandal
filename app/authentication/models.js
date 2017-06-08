const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email: {type: String, required: true, unique: true}
})

userSchema.methods.validPassword = function(password, done){
  this.verifyPassword(password, (err, valid) => {
    done(err, valid)
  })
}

const User = mongoose.model('User', userSchema)
module.exports = User
