const db = require('../db')
const { User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  let rides = await Rides.find()
  const user = [
    {
      first_name: 'John',
      last_name: 'Smith',
      age: 45,
      ride: rides[0]._id
    },
    {
      first_name: 'John',
      last_name: 'Doe',
      age: 35,
      ride: rides[1]._id
    }
  ]
}

const run = async () => {
  await main()
  db.close()
}

run()
