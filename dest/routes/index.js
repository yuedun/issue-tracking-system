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
var Router = require("koa-router");
var router = new Router();
var debug = require('debug')('yuedun:admin');
var assistance_model_1 = require("../models/assistance-model");
/**
 * render 函数是koa-views中间件赋予ctx的，是一个promise函数，所以需要用await修饰
 */
router.get('/admin', function (ctx, next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    debug(">>>admin输出");
                    return [4 /*yield*/, ctx.render('admin', {
                            title: 'hello admin',
                            body: "<h1>这是管理平台</h1>"
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
router.get('/teacher', function (ctx, next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    debug(">>>teacher输出");
                    return [4 /*yield*/, ctx.render('teacher', {
                            title: 'hello teacher',
                            body: "<h1>这是老师APP</h1>"
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
router.get('/client', function (ctx, next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    debug(">>>client输出");
                    return [4 /*yield*/, ctx.render('client', {
                            title: 'hello client',
                            body: "<h1>这是教学客户端</h1>"
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
router.get('/others/a', function (ctx, next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    debug(">>>admin输出");
                    return [4 /*yield*/, ctx.render('admin', {
                            title: 'hello admin',
                            body: "<h1>这是管理平台</h1>"
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
router.get('/others/b', function (ctx, next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    debug(">>>admin输出");
                    return [4 /*yield*/, ctx.render('admin', {
                            title: 'hello admin',
                            body: "<h1>这是管理平台</h1>"
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
router.get('/others/c', function (ctx, next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    debug(">>>admin输出");
                    return [4 /*yield*/, ctx.render('admin', {
                            title: 'hello admin',
                            body: "<h1>这是管理平台</h1>"
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
/**
 * 进入协助申请页面
 */
router.get('/admin/help', function (ctx, next) {
    return __awaiter(this, void 0, void 0, function () {
        var userAgent, referer, assistance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userAgent = ctx.req.headers['user-agent'];
                    referer = ctx.req.headers['referer'];
                    debug(">>>>>>>>>>>ask-for-help", userAgent, referer);
                    return [4 /*yield*/, assistance_model_1.default.findAll()];
                case 1:
                    assistance = _a.sent();
                    return [4 /*yield*/, ctx.render('ask-for-help', {
                            title: '申请协助',
                            userAgent: userAgent,
                            referer: referer,
                            assistance: assistance,
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
/**
 * 创建协助
 */
router.post('/admin/help', function (ctx, next) {
    return __awaiter(this, void 0, void 0, function () {
        var args, assistance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    args = ctx.request.body;
                    debug(">>>>>>>>>>>>>post", args);
                    return [4 /*yield*/, assistance_model_1.default.create({
                            title: args.title,
                            description: args.desc,
                            first_help_people: args.first_help_people,
                            second_help_people: args.second_help_people,
                            referer: args.referer,
                            user_agent: args.user_agent
                        })];
                case 1:
                    assistance = _a.sent();
                    ctx.body = {
                        msg: "创建成功",
                        assistance: assistance
                    };
                    return [2 /*return*/];
            }
        });
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map