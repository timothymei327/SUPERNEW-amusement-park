const db = require('../db')
const { Ride } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const rides = [
    {
      title: 'Batman',
      description: 'Fly through the night as Batman!',
      image: 'https://i.imgur.com/u7z7IZp.jpeg'
    },

    {
      title: 'Superman',
      description: 'Fly through the sky as Superman!',
      image: 'https://i.imgur.com/bKP6nk0.jpeg'
    },

    {
      title: 'Acrophobia',
      description: 'Test your bravery! Fall over 20 stories!',
      image: 'https://i.imgur.com/WYotClx.jpeg'
    },

    {
      title: 'Goliath',
      description: 'Can you handle this intense 70 mile-per-hour body-blaster!',
      image: 'https://i.imgur.com/Lp6yZTt.jpeg'
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
