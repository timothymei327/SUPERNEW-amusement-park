const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const { User } = require('./models')
const { Show } = require('./models')
const { Ride } = require('./models')
const db = require('./db')
const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.get('/', (req, res) => {
  res.send('hello world')
})
app.get('/rides', async (req, res) => {
  const rides = await Ride.find({})
  console.log('in rides route')
  res.json(rides)
})
app.get('/shows', async (req, res) => {
  const shows = await Show.find({})
  res.send(shows)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
