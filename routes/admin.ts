// const router = require('koa-router')()
import * as Router from 'koa-router';
const router = new Router();

router.prefix('/admin');

router.get('/', async function (ctx: any, next: Function) {
	await ctx.render('admin', {
		title: 'hello admin',
		body: "<h1>这是管理平台</h1>"
	})
});

router.get('/info', function (ctx: any, next: Function) {
	ctx.body = {

	}
})

router.get('/bar', function (ctx: any, next: Function) {
	ctx.body = 'this is a users/bar response'
})

export default router
