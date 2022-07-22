const { model } = require('mongoose')
const RideSchema = require('./ride')
const UserSchema = require('./user')
const ShowSchema = require('./show')

const User = model('User', UserSchema)
const Ride = model('Ride', RideSchema)
const Show = model('Show', ShowSchema)

module.exports = {
  User,
  Ride,
  Show
}
