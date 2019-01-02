const secretOrKey = require('../config/keys').tokenSecret
const mongoose = require('mongoose')
const User = mongoose.model('users')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secretOrKey

module.exports = function (passport) {
  passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    User.findById(jwt_payload.id)
      .then((user) => {
        if (user) done(null, user)
        else done(null, false)
      })
      .catch((err) => {
        done(null, false)
      })
  }));
}