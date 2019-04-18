"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Fs = require("fs");
const Path = require("path");
function registerRoute(app) {
    const files = Fs.readdirSync(Path.join(__dirname, "../routes"));
    for (let name of files) {
        let fileName = Path.join(__dirname, "../routes", name);
        if (Fs.statSync(fileName).isFile() && /\.js$/.test(fileName)) {
            let route = require(fileName);
            app.use(route.default.routes());
        }
    }
}
exports.registerRoute = registerRoute;
//# sourceMappingURL=auto-register-routes.js.map