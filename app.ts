import * as Koa from 'koa';
import * as Bluebird from 'bluebird';
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('koa2-cors');//跨域中间件
import sequelize from './utils/db-connection';
sequelize.sync({
	alter: false,
})
import { registerRoute } from './utils/auto-register-routes';
const debug = require('debug')('yuedun:app');

/**
 * app.env defaulting to the NODE_ENV or "development"
 * 生产环境由pm2启动时根据pm2.json配置来设置
 */
// error handler
onerror(app);

// middlewares
app.use(async function (ctx: any, next: Function) {
	ctx.set("Access-Control-Allow-Origin", ctx.request.header.origin)
	ctx.set("Access-Control-Allow-Credentials", true);
	ctx.set("Access-Control-Max-Age", 86400000);
	ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
	ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
	if (ctx.request.method == "OPTIONS") {
		ctx.response.status = 200
	}
	await next()
})
app.use(bodyparser({
	enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
	extension: 'ejs'
}))

// logger
app.use(async function (ctx: any, next: Function) {
	const start = new Date().getTime()
	await next()
	const ms = new Date().getTime() - start;
	debug(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
/**
 * next参数返回的是Promise，所以用await方式执行
 */
app.use(async function (ctx: Koa.Context, next: Function) {	
	//url重写：当url为"/"时，将url重写为"/admin"，
	//相当于请求”/admin”，有redirect的作用，但不是重定向，浏览器url还是“/”
	if (ctx.url == '/') {
		// ctx.url = '/platform/assistance-list'
		ctx.redirect('/platform/assistance-list')
	}
	await next();
	//对response进行包装,对获取的数据添加其他数据
	if (typeof ctx.body == "object") {
		ctx.body = Object.assign(ctx.body, { code: 0, msg: "success" })
	}
});

global.Promise = Bluebird;
// routes
registerRoute(app);//自动注册路由

export default app;
