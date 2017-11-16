import * as Koa from 'koa';
const app = new Koa();
import * as Router from 'koa-router';
const router = new Router();
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')

import { default as test } from './routes/test';
import { default as platform } from './routes/platform';
import { default as admin } from './routes/admin';
import { default as teacher } from './routes/teacher';

/**
 * app.env defaulting to the NODE_ENV or "development"
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
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
/**
 * next参数返回的是Promise，所以用await方式执行
 */
app.use(async function(ctx: any, next: Function){
	//url重写：当url为"/"时，将url重写为"/admin"，
	//相当于请求”/admin”，有redirect的作用，但不是重定向，浏览器url还是“/”
	if (ctx.url == '/') {
		ctx.url = '/platform'
	}
	await next();
});
// routes
app.use(test.routes());
app.use(platform.routes());
app.use(admin.routes());
app.use(teacher.routes());

export default app;
