"use strict";
var router = require('koa-router')();
router.prefix('/admin');
router.get('/info', function (ctx, next) {
    ctx.body = {};
});
router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response';
});
module.exports = router;
//# sourceMappingURL=admin.js.map