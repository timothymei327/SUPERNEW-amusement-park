const db = require('../db')
const { Ride } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const rides = [
    {
      title: 'Batman',
      description: 'Fly through the night as Batman!',
      image: 'https://imgur.com/u7z7IZp'
    },

    {
      title: 'Superman',
      description: 'Fly through the sky as Superman!',
      image: 'https://imgur.com/bKP6nk0'
    },

    {
      title: 'Acrophobia',
      description: 'Test your bravery! Fall over 20 stories!',
      image: 'https://imgur.com/WYotClx'
    },

    {
      title: 'Goliath',
      description: 'Can you handle this intense 70 mile-per-hour body-blaster!',
      image: 'https://imgur.com/Lp6yZTt'
    }
  ]
  await Ride.insertMany(rides)

  console.log('Make some rides')
}
const run = async () => {
  await main()
  db.close()
}
run()
