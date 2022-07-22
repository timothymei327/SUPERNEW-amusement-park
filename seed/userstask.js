// const db = require('../db')
// const { Ride, User, Show } = require('../models')
// const Ride = require('../models/ride')
// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// const main = async () => {
//   const user = [
//     {
//       first_name: 'John',
//       last_name: 'Smith',
//       age: 45,
//       ride: ride4._id,
//       show: show1._id
//     },
//     {
//       first_name: 'John',
//       last_name: 'Doe',
//       age: 35,
//       ride: ride2._id,
//       show: show4._id
//     }
//   ]

//   const ride1 = await new Ride({
//     title: 'Batman',
//     description: 'Fly through the night as Batman!'
//   })
//   ride1.save()
//   const ride2 = await new Ride({
//     title: 'Superman',
//     description: 'Fly through the sky as Superman!'
//   })
//   ride2.save()
//   const ride3 = await new Ride({
//     title: 'Acrophobia',
//     description: 'Test your bravery! Fall over 20 stories!'
//   })
//   ride3.save()

//   const ride4 = await new Ride({
//     title: 'Goliath',
//     description: 'Can you handle this intense 70 mile-per-hour body-blaster!'
//   })
//   ride4.save()

//   const show1 = await new Show({
//     title: 'Queen',
//     description: 'A concert with all the number one hits'
//   })
//   show1.save()
//   const show2 = await new Show({
//     title: 'Lady Gaga',
//     description: 'A concert with all the number one hits'
//   })
//   show2.save()
//   const show3 = await new Show({
//     title: 'Dr. Dre',
//     description: 'A concert with all the number one hits'
//   })
//   show3.save()
//   const show4 = await new Show({
//     title: 'Daft Punk',
//     description: 'A concert with all the number one hits'
//   })
//   show4.save()
// }

// console.log('Make some rides')

// const run = async () => {
//   await main()
//   db.close()
// }

// run()
