"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Koa = require("koa");
var app = new Koa();
var Router = require("koa-router");
var router = new Router();
var views = require('koa-views');
var json = require('koa-json');
var onerror = require('koa-onerror');
var bodyparser = require('koa-bodyparser');
var logger = require('koa-logger');
var cors = require('koa2-cors');
var db_connection_1 = require("./utils/db-connection");
db_connection_1.default.sync({
    alter: false,
    logging: function (message) {
        console.log(message);
    }
});
var auto_register_routes_1 = require("./utils/auto-register-routes");
onerror(app);
app.use(function (ctx, next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ctx.set("Access-Control-Allow-Origin", ctx.request.header.origin);
                    ctx.set("Access-Control-Allow-Credentials", true);
                    ctx.set("Access-Control-Max-Age", 86400000);
                    ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
                    ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
                    if (ctx.request.method == "OPTIONS") {
                        ctx.response.status = 200;
                    }
                    return [4, next()];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
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
    return __awaiter(this, void 0, void 0, function () {
        var start, ms;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    start = new Date().getTime();
                    return [4, next()];
                case 1:
                    _a.sent();
                    ms = new Date().getTime() - start;
                    console.log(ctx.method + " " + ctx.url + " - " + ms + "ms");
                    return [2];
            }
        });
    });
});
app.use(function (ctx, next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (ctx.url == '/') {
                        ctx.url = '/platform/assistance-list';
                    }
                    return [4, next()];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
});
auto_register_routes_1.registerRoute(app);
exports.default = app;
//# sourceMappingURL=app.js.map