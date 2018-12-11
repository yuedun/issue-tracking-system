"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var util = require('util');
var readFile = util.promisify(fs.readFile);
function rf(path) {
    return fs.readFile(path);
}
exports.rf = rf;
//# sourceMappingURL=readFile.js.map