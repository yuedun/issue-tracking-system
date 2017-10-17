const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx: any, next: Function) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx: any, next: Function) {
  ctx.body = 'this is a users/bar response'
})

export { router }
