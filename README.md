nodejs-koa
==========

基于koa框架的测试程序，需nodejs 7.X以上，stable版本

# 项目运行

复制config-sample.ts改名为config.ts

安装依赖：
> npm install

启动服务：
>`npm run dev`

linux下npm脚本：

> "dev": "DEBUG=yuedun:*& cd ./dest ./node_modules/.bin/nodemon ./dest/bin/www.js",

windows:
> "dev": "set DEBUG=yuedun:*& cd ./dest & nodemon ./bin/www.js",

koa.js获取url参数

`ctx.request.body`获取`post body`中的参数
`ctx.captures`获取`/user/123` `/user/:id`此类URL中的id,`ctx.captures`是个数组，按照URL中参数的顺序，ES6可以用这种方法接收：
`let [id] = ctx.captures`，如果是多个参数`/user/123/yuedun` `/user/:id/:name` `let [id, name] = ctx.captures`
`ctx.query`获取`/user/?name=yuedun`

## pm2运行项目
> pm2 start pm2.json --env production

`--env production`参数是为了设置环境变量，由pm2.json中的配置决定设置什么样的环境变量
```
//pm2.json
"env": {
    "NODE_ENV": "development",
    "PORT": 3002
},
"env_production" : {
    "NODE_ENV": "production",
    "PORT": 3003
}
```
如果不加参数则默认使用
```
"env": {
    "NODE_ENV": "development",
    "PORT": 3002
}
```
结果：`NODE_ENV=development`,`PORT=3002`

加`--env production`则使用的是
```
"env_production" : {
    "NODE_ENV": "production",
    "PORT": 3003
}
```
结果：`NODE_ENV=production`,`PORT=3003`
#项目架构
使用的框架和技术包括：TypeScript,Koa2,Sequelize

# 需求设计

提供两个入口：
* 管理平台直接进入发起请求，可以获取到来源页面url
* 直接输入网址，发起请求

需要填写的栏位有标题，主体内容，紧急程度，第一二协助人，问题来源，后台需要记录的有发起人信息，解决状态，顶起（我也有该问题）
