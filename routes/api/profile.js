
const express = require('express')
const passport = require('passport')

const User = require('../../models/profile')
const error = require('../../config/error')
const router = express.Router()


router.get('/test', (req, res) => {
  res.json({msg: true})
})

module.exports = router