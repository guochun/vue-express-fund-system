
const express = require('express')
const passport = require('passport')

const Profile = require('../../models/profile')
const error = require('../../config/error')
const router = express.Router()

// routes /api/profile/add
// desc 添加资金信息
// access private
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
  const profileFiled = {}
  let newProfile = null
  if (req.body.type) profileFiled.type = req.body.type
  if (req.body.describe) profileFiled.describe = req.body.describe
  if (req.body.income) profileFiled.income = req.body.income
  if (req.body.expend) profileFiled.expend = req.body.expend
  if (req.body.cash) profileFiled.cash = req.body.cash
  if (req.body.remark) profileFiled.remark = req.body.remark

  newProfile = new Profile(profileFiled)
  newProfile.save()
    .then((profile) => {
      res.json(profile)
    })
    .catch((err) => {
      const info = error[3002]
      res.status(info.status).json(info)
    })

})

// routes  /api/profile/
// desc 获取所有的信息
// access private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.find()
    .then((profiles) => {
      if (!profiles) Promise.reject({ code: 3001 })
      res.json(profiles)
    })
    .catch((err) => {
      const code = err.code || '3001'
      const info = error[code]
      res.status(info.status).json(info)
    })
})

// routes /api/profile/
// desc 获取所有的信息
// access private
router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log(req.params.id)
  Profile.findOne({ _id: req.params.id })
    .then((profile) => {
      if (!profile) return Promise.reject({ code: '3001' })
      res.json(profile)
    })
    .catch((err) => {
      const code = err.code || '3001'
      const info = error[code]
      res.status(info.status).json(info)
      console.log(info)
    })
})



module.exports = router