const router = require('koa-router')();
const fs = require('../services/readFile');
router.prefix('/teacher');

router.get('/', async function (ctx: any, next: Function) {
	await ctx.render('teacher', {
		title: 'hello teacher',
		body: "<h1>这是讲师APP</h1>"
	})
});

router.get('/string', async (ctx: any, next: Function) => {
	ctx.body = 'koa2 string'
})

router.get('/json', async (ctx: any, next: Function) => {
	ctx.body = {
		title: 'koa2 json'
	}
})

router.get('/test', async (ctx: any, next: Function) => {
	const data = await fs.rf('npm-debug.log');
	await ctx.render('test', { title: 'Koa2-Easy', data: data })
})

export default router
