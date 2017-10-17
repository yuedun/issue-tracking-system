"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router = require('koa-router')();
exports.router = router;
router.prefix('/users');
router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!';
});
router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response';
});
//# sourceMappingURL=users.js.map