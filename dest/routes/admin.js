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
const debug = require('debug')('yuedun:admin');
const helper_model_1 = require("../models/helper-model");
const feature_model_1 = require("../models/feature-model");
const helper_feature_relation_model_1 = require("../models/helper-feature-relation-model");
class Controller {
    createHelperFeature(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let args = ctx.request.body;
            let peopleFeature = yield helper_feature_relation_model_1.default.create({
                helper_id: args.people_id,
                feature_id: args.feature_id
            });
            ctx.body = {
                msg: "创建成功",
                peopleFeature
            };
        });
    }
    createFeature(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let args = ctx.request.body;
            let feature = yield feature_model_1.default.create({
                feature_name: args.feature_name
            });
            ctx.body = {
                msg: "创建成功",
                feature
            };
        });
    }
    createHelper(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let args = ctx.request.body;
            debug(">>>>>>>>>>>>>post assistance people:", args);
            let assistancePeople = yield helper_model_1.default.create({
                user_name: args.user_name,
                mobile: args.mobile,
                email: args.email
            });
            ctx.body = {
                msg: "创建成功",
                assistancePeople
            };
        });
    }
    ;
    updateHelper(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let args = ctx.request.body;
            debug(">>>>>>>>>>>>>post assistance people:", args);
            let assistancePeople = yield helper_model_1.default.update({
                user_name: args.user_name,
                mobile: args.mobile,
                email: args.email
            }, {
                where: { id: 1 }
            });
            ctx.body = {
                msg: "修改成功",
                assistancePeople
            };
        });
    }
    ;
    createAssistancePeople(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let args = ctx.request.body;
            let assistancePeople = yield helper_model_1.default.findByPk(args.person_id);
            assistancePeople.features = assistancePeople.features.concat(",", args.feature_name);
            assistancePeople.save();
            ctx.body = {
                msg: "修改成功",
                assistancePeople
            };
        });
    }
    ;
}
exports.default = new Controller();
//# sourceMappingURL=admin.js.map