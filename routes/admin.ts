const router = require('koa-router')()

router.prefix('/admin')

router.get('/info', function (ctx: any, next: Function) {
  ctx.body = {

  }
})

router.get('/bar', function (ctx: any, next: Function) {
  ctx.body = 'this is a users/bar response'
})

export { router }
