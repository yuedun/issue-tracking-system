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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var moment = require("moment");
var Bluebird = require("bluebird");
var router = new Router();
var debug = require('debug')('yuedun:platform');
var assistance_model_1 = require("../models/assistance-model");
var helper_model_1 = require("../models/helper-model");
router.get('/platform', function (ctx) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    debug(">>>admin输出");
                    return [4, ctx.render('platform', {
                            title: 'hello platform',
                            body: "<h1>这是管理平台</h1>"
                        })];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
});
router.get('/teacher', function (ctx) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    debug(">>>teacher输出");
                    return [4, ctx.render('teacher', {
                            title: 'hello teacher',
                            body: "<h1>这是老师APP</h1>"
                        })];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
});
router.get('/client', function (ctx) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    debug(">>>client输出");
                    return [4, ctx.render('client', {
                            title: 'hello client',
                            body: "<h1>这是教学客户端</h1>"
                        })];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
});
router.get('/others/a', function (ctx) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    debug(">>>admin输出");
                    return [4, ctx.render('platform', {
                            title: 'hello platform',
                            body: "<h1>这是管理平台</h1>"
                        })];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
});
router.get('/others/b', function (ctx) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    debug(">>>admin输出");
                    return [4, ctx.render('platform', {
                            title: 'hello platform',
                            body: "<h1>这是管理平台</h1>"
                        })];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
});
router.get('/others/c', function (ctx) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    debug(">>>admin输出");
                    return [4, ctx.render('platform', {
                            title: 'hello platform',
                            body: "<h1>这是管理平台</h1>"
                        })];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
});
router.get('/platform/assistance-list', function (ctx) {
    return __awaiter(this, void 0, void 0, function () {
        var args, userAgent, referer, pageIndex, assistancies, total, assistanceInfos;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    args = ctx.request.query;
                    debug(">>>>args:", args);
                    userAgent = ctx.req.headers['user-agent'];
                    referer = ctx.req.headers['referer'];
                    pageIndex = args.pageIndex ? (args.pageIndex - 1) * 5 : 0;
                    return [4, assistance_model_1.default.findAll({
                            offset: pageIndex,
                            limit: 5,
                            order: [['created_at', 'desc']]
                        })];
                case 1:
                    assistancies = _a.sent();
                    return [4, assistance_model_1.default.count()];
                case 2:
                    total = _a.sent();
                    assistanceInfos = assistancies;
                    return [4, Bluebird.map(assistanceInfos, function (item, index) { return __awaiter(_this, void 0, void 0, function () {
                            var userRecord;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, item.getUser()];
                                    case 1:
                                        userRecord = _a.sent();
                                        item.user_name = (userRecord && userRecord.user_name) ? userRecord.user_name : "缺省";
                                        item.imageArr = item.images ? item.imageArr = item.images.split(",") : [];
                                        item.setDataValue("created_at", moment(item.created_at).format("YYYY-MM-DD HH:ss:mm"));
                                        return [2, item];
                                }
                            });
                        }); })];
                case 3:
                    _a.sent();
                    return [4, ctx.render('assistance-list', {
                            title: '申请协助',
                            userAgent: userAgent,
                            referer: referer,
                            currentIndex: args.pageIndex || 1,
                            total: total,
                            assistanceInfos: assistanceInfos
                        })];
                case 4:
                    _a.sent();
                    return [2];
            }
        });
    });
});
router.get('/platform/new-assistance', function (ctx) {
    return __awaiter(this, void 0, void 0, function () {
        var userAgent, referer, assistancies, assistanceInfos;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userAgent = ctx.req.headers['user-agent'];
                    referer = ctx.req.headers['referer'];
                    return [4, assistance_model_1.default.findAll({
                            order: [['created_at', 'desc']]
                        })];
                case 1:
                    assistancies = _a.sent();
                    assistanceInfos = assistancies;
                    return [4, Bluebird.map(assistanceInfos, function (item, index) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                item.setDataValue("created_at", moment(item.created_at).format("YYYY-MM-DD HH:ss:mm"));
                                return [2, item];
                            });
                        }); })];
                case 2:
                    _a.sent();
                    return [4, ctx.render('new-assistance', {
                            title: '申请协助',
                            userAgent: userAgent,
                            referer: referer,
                            assistanceInfos: assistanceInfos,
                            api: {
                                assistance: '/platform/help'
                            }
                        })];
                case 3:
                    _a.sent();
                    return [2];
            }
        });
    });
});
router.post('/platform/help', function (ctx) {
    return __awaiter(this, void 0, void 0, function () {
        var args, assistance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    args = ctx.request.body;
                    return [4, assistance_model_1.default.create({
                            description: args.description,
                            first_helper: args.first_helper ? parseInt(args.first_helper) : 0,
                            second_helper: args.second_helper ? parseInt(args.second_helper) : 0,
                            user_mobile: args.user_mobile,
                            referer: args.referer,
                            user_agent: args.user_agent,
                            user_id: 1,
                            state: 0
                        })];
                case 1:
                    assistance = _a.sent();
                    ctx.body = {
                        msg: "创建成功",
                        assistance: assistance,
                        url: {
                            assistanceList: "/platform/assistance-list"
                        }
                    };
                    return [2];
            }
        });
    });
});
router.delete('/platform/help/:id', function (ctx) {
    return __awaiter(this, void 0, void 0, function () {
        var id, assistance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = ctx.captures[0];
                    debug(">>>>>>>>>>>>>delete", id);
                    return [4, assistance_model_1.default.destroy({
                            where: { id: id }
                        })];
                case 1:
                    assistance = _a.sent();
                    ctx.body = {
                        msg: "删除成功"
                    };
                    return [2];
            }
        });
    });
});
router.get('/platform/helper/features', function (ctx) {
    return __awaiter(this, void 0, void 0, function () {
        var args, where, helperList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    args = ctx.request.query;
                    where = {};
                    if (args.user_name) {
                        where.user_name = { $like: args.user_name + "%" };
                    }
                    return [4, helper_model_1.default.findAll({
                            attributes: ["id", "user_name", "features"],
                            where: where
                        })];
                case 1:
                    helperList = _a.sent();
                    ctx.body = {
                        data: {
                            list: helperList
                        }
                    };
                    return [2];
            }
        });
    });
});
exports.default = router;
//# sourceMappingURL=platform.js.map