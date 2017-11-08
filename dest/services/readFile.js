"use strict";
var fs = require('fs');
var util = require('util');
var readFile = util.promisify(fs.readFile); //node 8.0新增api
exports.rf = function (path) {
    return fs.readFile(path);
};
//# sourceMappingURL=readFile.js.map