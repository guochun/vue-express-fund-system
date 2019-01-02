// 用户路由接口 配置用户的登陆和注册

const express = require('express')
const User = require('../../models/users')
const gravatar = require('gravatar');
const encrypt = require('../../util/crypt').encrypt
const compare = require('../../util/crypt').compare
const error = require('../../config/error')
const router = express.Router()

// routes /api/users/login
// desc 返回token jwt passport
// access public
router.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  User.findOne({ email })
    .then((user) => {
      if (!user) return Promise.reject({ code: 2001 })
      return compare(password, user.password)
    })
    .then((isMatch) => {
      if (!isMatch) return Promise.reject({ code: 2002 })
      res.json({ msg: "success" })
    })
    .catch((err) => {
      if (err.code) {
        const errInfo = error[err.code]
        res.status(errInfo.status).json(errInfo)
      }
      console.log(err)
    })

})

// routes /api/users/register
// desc 返回用户请求的json数据
// access public
router.post('/register', (req, res) => {
  const data = req.body
  let newUser = null
  // 判断用户的邮箱是否被注册
  User.findOne({ email: data.email })
    .then((user) => {
      if (user) {
        return Promise.reject({ code: 1001 })
      }
      newUser = new User({
        name: data.name,
        email: data.email,
        password: data.password,
        avatar: gravatar.url(data.email, { s: '200', r: 'pg', d: 'mm' })
      })
      return encrypt(newUser.password)
    })
    .then((hash) => {
      if (!hash) {
        return Promise.reject({ code: 1002 })
      }
      newUser.password = hash
      return newUser.save(newUser)
    })
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      if (err.code) {
        const errInfo = error[err.code]
        res.status(errInfo.status).json(errInfo)
      }
      console.log(err)
    })
})

module.exports = router