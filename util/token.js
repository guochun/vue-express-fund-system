const jwt = require('jsonwebtoken')
const sign = require("util").promisify(jwt.sign)
const secret = require('../config/keys').tokenSecret
const expire = require('../config/keys').tokenExpiresIn

module.exports = function (rule) {
  return sign(rule,secret,expire)
}