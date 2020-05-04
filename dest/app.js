"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('koa2-cors');
const db_connection_1 = require("./utils/db-connection");
db_connection_1.default.sync({ force: false });
const router_1 = require("./routes/router");
const debug = require('debug')('yuedun:app');
onerror(app);
app.use(function (ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        ctx.set("Access-Control-Allow-Origin", ctx.request.header.origin);
        ctx.set("Access-Control-Allow-Credentials", true);
        ctx.set("Access-Control-Max-Age", 86400000);
        ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
        ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
        if (ctx.request.method == "OPTIONS") {
            ctx.response.status = 200;
        }
        yield next();
    });
});
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));
app.use(views(__dirname + '/views', {
    extension: 'ejs'
}));
app.use(function (ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const start = new Date().getTime();
        yield next();
        const ms = new Date().getTime() - start;
        debug(`${ctx.method} ${ctx.url} - ${ms}ms`);
    });
});
app.use(function (ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (ctx.url == '/') {
            ctx.redirect('/platform/assistance-list');
        }
        yield next();
        if (typeof ctx.body == "object") {
            ctx.body = Object.assign(ctx.body, { code: 0, msg: "success" });
        }
    });
});
app.use(router_1.default().routes());
exports.default = app;
//# sourceMappingURL=app.js.map