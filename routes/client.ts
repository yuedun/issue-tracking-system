const router = require('koa-router')()

router.prefix('/client')

router.get('/', async function (ctx: any, next: Function) {
	await ctx.render('client', {
		title: 'hello client',
		body: "<h1>这是教学客户端</h1>"
	})
});

router.get('/bar', function (ctx: any, next: Function) {
	ctx.body = 'this is a users/bar response'
})

export default router
