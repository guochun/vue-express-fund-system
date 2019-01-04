# vue + express 实现前后端分离资金管理后台demo

## 技术栈

### 后端 
- 框架: express
- 数据库: mongodb mongoose 
- 其他: body-parser cryptjs gravatar jsonwebtoken passport passport-jwt

### 前端
- 框架 Vue
- UI框架 element


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
10：测试profile接口 配置profile数据模型  
11: 配置添加信息接口  
12：配置获取全部信息 获取单个信息接口  
13: 配置删除信息和编辑信息接口  
14: 初始化前端项目 安装concurrently 实现前后端连载
15: 配置主页路由引入reset.css样式  
16: 配置register和404页面路由编写404页面  
17: 完成注册页面表单   
18: 添加表单验证 
19: 添加加载动画和消息提醒


