// 引入外部模块
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')

// 引入本地文件
const keys = require('./config/keys')
const users = require('./routes/api/users')
const passportProcessor = require('./util/passport')

//配置信息
const db = keys.mongoUri
const port = keys.port

const app = express()



//连接数据库
mongoose.connect(db,{useNewUrlParser: true})
  .then(() => {
    console.log('mongodb connected')
  })
  .catch((err) => {
    throw new Error(err)
  })

// 中间件

app.use(passport.initialize())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//配置路由
app.use('/api/users', users)

passportProcessor(passport)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, () => {
  console.log(`server is running at port ${port}`)
})