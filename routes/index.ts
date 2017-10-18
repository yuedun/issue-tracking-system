// const router = require('koa-router')()
import * as Router from 'koa-router';
const router = new Router();
var debug = require('debug')('yuedun:admin');

router.get('/admin', async function (ctx: any, next: Function) {
	debug(">>>admin输出");
	await ctx.render('admin', {
		title: 'hello admin',
		body: "<h1>这是管理平台</h1>"
	})
})

router.get('/teacher', async function (ctx: any, next: Function) {
	debug(">>>teacher输出");
	await ctx.render('teacher', {
		title: 'hello teacher',
		body: "<h1>这是老师APP</h1>"
	})
})

router.get('/client', async function (ctx: any, next: Function) {
	debug(">>>client输出");
	await ctx.render('client', {
		title: 'hello client',
		body: "<h1>这是教学客户端</h1>"
	})
})

router.get('/others/a', async function (ctx: any, next: Function) {
	debug(">>>admin输出");
	await ctx.render('admin', {
		title: 'hello admin',
		body: "<h1>这是管理平台</h1>"
	})
})

router.get('/others/b', async function (ctx: any, next: Function) {
	debug(">>>admin输出");
	await ctx.render('admin', {
		title: 'hello admin',
		body: "<h1>这是管理平台</h1>"
	})
})

router.get('/others/c', async function (ctx: any, next: Function) {
	debug(">>>admin输出");
	await ctx.render('admin', {
		title: 'hello admin',
		body: "<h1>这是管理平台</h1>"
	})
})

router.get('/admin/help', async function (ctx: any, next: Function) {
	debug(">>>ask-for-help", "dgds");
	await ctx.render('ask-for-help', {
		title: 'ask-for-help',
		body: "<h1>这是管理平台</h1>"
	})
})

/**
 * 创建协助
 */
router.post('/admin/help', async function (ctx: any, next: Function) {
	debug(">>>post help", ctx.request.body);
	ctx.body = {
		msg: "创建成功"
	}
})

export default router
