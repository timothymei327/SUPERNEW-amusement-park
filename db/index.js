const mongoose = require('mongoose')
require('dotenv').config() // Add this line

let dbUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : 'mongodb+srv://yes:Yes12345@cluster0.rnkbkky.mongodb.net/?retryWrites=true&w=majority/parkDatabase'

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('Successfully connected to MongoDB!')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
