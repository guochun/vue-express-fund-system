# vue + express 实现前后端分离资金管理后台demo

## 技术栈

### 后端 
- 框架: express
- 数据库: mongodb mongoose 
- 其他: body-parser cryptjs gravatar jsonwebtoken passport passport-jwt

### 前端



## 项目步骤

1: 初始化项目 安装express框架  
2: 连接数据库 安装mongoose 连接 https://mlab.com mongo数据库  
3: 配置用户数据模型 安装body-parser 中间件  
4: 配置用户注册路由 通过cryptjs 对用户密码进行加密   
5：使用gravatar 设置用户的头像信息  
6: 配置用户的登陆接口 
7: 安装jsonwebtoken配置用户请求成功token 
8: 安装passport passport-jwt 添加用户token验证 
9: 修改用户数据模型 添加身份验证字段
