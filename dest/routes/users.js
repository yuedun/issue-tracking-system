"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router = require('koa-router')();
router.prefix('/users');
router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!';
});
router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response';
});
exports.default = router;
//# sourceMappingURL=users.js.map