"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
function rf(path) {
    return fs.readFile(path);
}
exports.rf = rf;
//# sourceMappingURL=readFile.js.map