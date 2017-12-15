"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fs = require("fs");
var Path = require("path");
function registerRoute(app) {
    var files = Fs.readdirSync(Path.join(__dirname, "../routes"));
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var name = files_1[_i];
        var fileName = Path.join(__dirname, "../routes", name);
        if (Fs.statSync(fileName).isFile() && /\.js$/.test(fileName)) {
            var route = require(fileName);
            app.use(route.default.routes());
        }
    }
}
exports.registerRoute = registerRoute;
//# sourceMappingURL=auto-register-routes.js.map