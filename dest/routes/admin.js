"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router = require('koa-router')();
exports.router = router;
router.prefix('/admin');
router.get('/info', function (ctx, next) {
    ctx.body = {};
});
router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response';
});
//# sourceMappingURL=admin.js.map