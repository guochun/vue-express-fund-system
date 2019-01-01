// 配置用户的数据模型
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 配置用户表
const userSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  passWord: {
    type: String,
    require: true
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('users', userSchema)
