"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bluebird = require("bluebird");
const debug = require('debug')('yuedun:platform');
const assistance_model_1 = require("../models/assistance-model");
const helper_model_1 = require("../models/helper-model");
class Controller {
    index(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            debug(">>>admin输出");
            yield ctx.render('platform', {
                title: 'hello platform',
                body: "<h1>这是管理平台</h1>"
            });
        });
    }
    ;
    teacher(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            debug(">>>teacher输出");
            yield ctx.render('teacher', {
                title: 'hello teacher',
                body: "<h1>这是老师APP</h1>"
            });
        });
    }
    ;
    client(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            debug(">>>client输出");
            yield ctx.render('client', {
                title: 'hello client',
                body: "<h1>这是教学客户端</h1>"
            });
        });
    }
    ;
    a(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            debug(">>>admin输出");
            yield ctx.render('platform', {
                title: 'hello platform',
                body: "<h1>这是管理平台</h1>"
            });
        });
    }
    ;
    b(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            debug(">>>admin输出");
            yield ctx.render('platform', {
                title: 'hello platform',
                body: "<h1>这是管理平台</h1>"
            });
        });
    }
    ;
    c(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            debug(">>>admin输出");
            yield ctx.render('platform', {
                title: 'hello platform',
                body: "<h1>这是管理平台</h1>"
            });
        });
    }
    ;
    assistanceList(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let args = ctx.request.query;
            debug(">>>>args:", args);
            let userAgent = ctx.req.headers['user-agent'];
            let referer = ctx.req.headers['referer'];
            let pageIndex = args.pageIndex ? (args.pageIndex - 1) * 5 : 0;
            let assistancies = yield assistance_model_1.default.findAll({
                offset: pageIndex,
                limit: 5,
                order: [['created_at', 'desc']]
            });
            let total = yield assistance_model_1.default.count();
            let assistanceInfos = assistancies;
            yield Bluebird.map(assistanceInfos, (item, index) => __awaiter(this, void 0, void 0, function* () {
                let userRecord = yield item.getUserModel();
                item.user_name = (userRecord && userRecord.user_name) ? userRecord.user_name : "缺省";
                item.imageArr = item.images ? item.imageArr = item.images.split(",") : [];
                return item;
            }));
            yield ctx.render('assistance-list', {
                title: '申请协助',
                userAgent,
                referer,
                currentIndex: args.pageIndex || 1,
                total,
                assistanceInfos
            });
        });
    }
    ;
    newAssistance(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let userAgent = ctx.req.headers['user-agent'];
            let referer = ctx.req.headers['referer'];
            let assistancies = yield assistance_model_1.default.findAll({
                order: [['created_at', 'desc']]
            });
            let assistanceInfos = assistancies;
            yield ctx.render('new-assistance', {
                title: '申请协助',
                userAgent,
                referer,
                assistanceInfos,
                api: {
                    assistance: '/platform/help'
                }
            });
        });
    }
    ;
    help(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let args = ctx.request.body;
            let assistance = yield assistance_model_1.default.create({
                description: args.description,
                first_helper: args.first_helper ? parseInt(args.first_helper) : 0,
                second_helper: args.second_helper ? parseInt(args.second_helper) : 0,
                user_mobile: args.user_mobile,
                referer: args.referer,
                user_agent: args.user_agent,
                user_id: 1,
                state: 0
            });
            ctx.body = {
                msg: "创建成功",
                assistance: assistance,
                url: {
                    assistanceList: "/platform/assistance-list"
                }
            };
        });
    }
    ;
    delHelp(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let [id] = ctx.captures;
            debug(">>>>>>>>>>>>>delete", id);
            let assistance = yield assistance_model_1.default.destroy({
                where: { id }
            });
            ctx.body = {
                msg: "删除成功"
            };
        });
    }
    ;
    helperFeatures(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let args = ctx.request.query;
            let where = {};
            if (args.user_name) {
                where.user_name = { $like: `${args.user_name}%` };
            }
            let helperList = yield helper_model_1.default.findAll({
                attributes: ["id", "user_name", "features"],
                where
            });
            ctx.body = {
                data: {
                    list: helperList
                }
            };
        });
    }
    ;
}
exports.default = new Controller();
//# sourceMappingURL=platform.js.map