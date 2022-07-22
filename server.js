const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const User = require('./models/user')
const Task = require('./models/task')
const Show = require('./models/show')
const { default: Home } = require('./src/components/Home')
const Ride = require('./models/ride')

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
  res.send(Ride)
})
app.get('/shows', async (req, res) => {
  const shows = await Show.find({})
  res.send(Show)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
