const { model } = require('mongoose')
const TaskSchema = require('./task')
const UserSchema = require('./user')

const User = model('User', UserSchema)
const Task = model('Task', TaskSchema)

module.exports = {
  User,
  Task
}
