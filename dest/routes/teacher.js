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
const readFile_1 = require("../services/readFile");
class Controller {
    index(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            yield ctx.render('teacher', {
                title: 'hello teacher',
                body: "<h1>这是讲师APP</h1>"
            });
        });
    }
    ;
    string(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            ctx.body = 'koa2 string';
        });
    }
    json(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            ctx.body = {
                title: 'koa2 json'
            };
        });
    }
    test(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield readFile_1.rf('npm-debug.log');
            yield ctx.render('test', { title: 'Koa2-Easy', data: data });
        });
    }
}
exports.default = new Controller();
//# sourceMappingURL=teacher.js.map