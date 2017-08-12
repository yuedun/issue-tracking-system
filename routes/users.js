const router = require('koa-router')()

router.prefix('/users')

router.get('/list', function (ctx, next) {
	ctx.body = [{
		registe_time: '2016-05-12',
		username: '戈薇',
		city: '日暮神社'
	}
	, {
		registe_time: '2016-05-02',
		username: '犬夜叉',
		city: '犬之国'
	}
	, {
		registe_time: '2016-05-02',
		username: '弥勒',
		city: '战国'
	}
	]
})

router.get('/bar', function (ctx, next) {
	ctx.body = 'this is a users/bar response'
})

module.exports = router
