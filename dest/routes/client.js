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
class Controller {
    index(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            yield ctx.render('client', {
                title: 'hello client',
                body: "<h1>这是教学客户端</h1>"
            });
        });
    }
    ;
    bar(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            ctx.body = 'this is a users/bar response';
        });
    }
}
exports.default = new Controller();
//# sourceMappingURL=client.js.map