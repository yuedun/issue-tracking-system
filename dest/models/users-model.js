"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var db_connection_1 = require("../utils/db-connection");
;
var Model = db_connection_1.default.define('Users', {
    user_name: Sequelize.STRING,
    mobile: Sequelize.STRING
}, {
    underscored: true,
    tableName: 'users',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
});
exports.default = Model;
//# sourceMappingURL=users-model.js.map