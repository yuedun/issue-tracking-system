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

import { default as admin } from './routes/admin'
import { default as teacher } from './routes/teacher'
import { default as client } from './routes/client'
import { default as others } from './routes/other'

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
// routes
app.use(admin.routes())
app.use(teacher.routes())
app.use(client.routes())
app.use(others.routes())

export default app;
