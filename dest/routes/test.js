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
const user_model_1 = require("../models/user-model");
const debug = require('debug')('yuedun:test');
class Controller {
    index(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield user_model_1.default.findByPk(1);
            let ass = yield user.getAssistanceModels();
            yield ctx.render('client', {
                title: 'hello client',
                body: "<h1>这是教学客户端</h1>"
            });
        });
    }
}
exports.default = new Controller();
//# sourceMappingURL=test.js.map