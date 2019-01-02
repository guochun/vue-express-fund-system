// 用户路由接口 配置用户的登陆和注册

const express = require('express')
const passport = require('passport')

const User = require('../../models/users')
const gravatar = require('gravatar');
const encrypt = require('../../util/crypt').encrypt
const compare = require('../../util/crypt').compare
const sign = require('../../util/token')
const error = require('../../config/error')
const router = express.Router()

// routes /api/users/login
// desc 返回token jwt passport
// access public
router.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  let findUser = null
  User.findOne({ email })
    .then((user) => {
      if (!user) return Promise.reject({ code: 2001 })
      findUser = user
      return compare(password, user.password)
    })
    .then((isMatch) => {
      if (!isMatch) return Promise.reject({ code: 2002 })
      const rule = {
        id:  findUser.id,
        name: findUser.name,
        email: findUser.email,
        avatar: findUser.avatar
      }
      return sign(rule)
    })
    .then((token) => {
      res.json({
        sucess: true,
        token: 'Bearer ' + token
      })
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
        avatar: gravatar.url(data.email, { s: '200', r: 'pg', d: 'mm' }),
        identity: data.identity
      })
      return encrypt(newUser.password)
    })
    .then((hash) => {
      if (!hash) {
        return Promise.reject({ code: 1002 })
      }
      newUser.password = hash
      return newUser.save()
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

// routes /api/users/current
// desc 测试token验证
// access private
router.get('/current',passport.authenticate('jwt',{session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
    avatar: req.user.avatar,
    identity: req.user.identity
  })
})

module.exports = router