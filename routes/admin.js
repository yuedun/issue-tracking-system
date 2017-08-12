const router = require('koa-router')()

router.prefix('/admin')

router.get('/info', function (ctx, next) {
	ctx.body = {
		status: 1,
		data: {
			id: 0,
			avatar: "6c224f4a20a446237a8e58de9822720e0df3d7c2.jpg",
			user_name: "杀生丸",
			created_at: "1348-02-23",
			admin: 1
		}
	}
})

router.post('/login', function (ctx, next) {
	console.log(ctx.request.body)
	ctx.body = {
		status: 1
	}
})

module.exports = router
