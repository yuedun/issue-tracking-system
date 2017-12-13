"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FS = require("fs");
var Path = require("path");
function routes(app) {
    var files = FS.readdirSync(Path.join(process.cwd(), "dest/routes"));
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var name = files_1[_i];
        var fileName = Path.join(process.cwd(), "dest/routes", name);
        if (FS.statSync(fileName).isFile() && /\.js$/.test(fileName)) {
            var route = require(fileName);
            console.log(">>>>>>>>", route);
            app.use(route.default.routes());
        }
    }
}
exports.routes = routes;
//# sourceMappingURL=index-routes.js.map