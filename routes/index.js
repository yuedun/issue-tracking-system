const router = require('koa-router')();
const fs = require('../services/readFile')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/test', async (ctx, next) => {
  const data = await fs.rf('npm-debug.log');
  await ctx.render('test', { title: 'Koa2-Easy',data: data })
})

module.exports = router
