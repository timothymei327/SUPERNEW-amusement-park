const db = require('./db')
const { User, Task } = require('./models')

const findAllUsers = async () => {
  const users = await User.find()
  console.log('All users:', users)
}

const findAllTasks = async () => {
  const tasks = await Task.find()
  console.log('All tasks:', tasks)
}

const findOneWithTasks = async () => {
  const user1 = await User.findOne()

  console.log(JSON.stringify(user1), null, 2)
}

const run = async () => {
  try {
    await findAllUsers()
    await findAllTasks()
    // await findOneWithTasks()
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

run()
