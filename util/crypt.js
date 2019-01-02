const bcrypt = require('bcryptjs')
const util = require('util');
const genSalt = util.promisify(bcrypt.genSalt)
const hash = util.promisify(bcrypt.hash)
const compare = util.promisify(bcrypt.compare)
const saltRounds = 10;
const crypt = {}

crypt.encrypt = function (content) {
  return genSalt(saltRounds)
    .then((salt) => {
      return hash(content,salt)
    })
    .then((hash) => {
      return Promise.resolve(hash)
    })
    .catch((err) => {
      console.log(err)
    })
}

crypt.compare = function (content, hash) {
  return compare(content, hash)
}

module.exports = crypt