"use strict";
var fs = require('fs');
var util = require('util');
var readFile = util.promisify(fs.readFile);
exports.rf = function (path) {
    return fs.readFile(path);
};
//# sourceMappingURL=readFile.js.map