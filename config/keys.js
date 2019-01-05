module.exports = {
  mongoUri: 'mongodb://purcy:guochun521@ds125684.mlab.com:25684/vue-express-fund-system',
  port: port = process.env.PORT || 8081,
  tokenSecret: 'secret',
  tokenExpiresIn: {expiresIn: 3600000}
}