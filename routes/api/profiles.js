
const express = require('express')
const passport = require('passport')

const Profile = require('../../models/profile')
const error = require('../../config/error')
const router = express.Router()


// routes /api/users/add
// desc 添加资金信息
// access private
router.post('/add', passport.authenticate('jwt', {session: false}), (req, res) => {
  const profileFiled = {}
  let newProfile = null
  if(req.body.type) profileFiled.type = req.body.type
  if(req.body.describe) profileFiled.describe= req.body.describe
  if(req.body.income) profileFiled.income = req.body.income
  if(req.body.expend) profileFiled.expend = req.body.expend
  if(req.body.cash) profileFiled.cash = req.body.cash
  if(req.body.remark) profileFiled.remark = req.body.remark

  newProfile = new Profile(profileFiled)
  newProfile.save()
    .then((profile) => {
      res.json(profile)
    })

})

module.exports = router