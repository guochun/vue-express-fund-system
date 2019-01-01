// 引入外部包体
const express = require('express')
const mongoose = require('mongoose')

// 引入本地文件
const keys = require('./config/keys')
const users = require('./routes/api/users')

//配置信息
const db = keys.mongoUri
const port = keys.port

const app = express()

//连接数据库
mongoose.connect(db)
  .then(() => {
    console.log('mongodb connected')
  })
  .catch((err) => {
    throw new Error(err)
  })


//配置路由
app.use('/api/users', users)


app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, () => {
  console.log(`server is running at port ${port}`)
})