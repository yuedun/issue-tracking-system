"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var db_connection_1 = require("../utils/db-connection");
;
var Model = db_connection_1.default.define('Users', {
    user_name: Sequelize.STRING(10),
    mobile: Sequelize.STRING(11)
}, {
    underscored: true,
    tableName: 'user',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
});
Model.sync({ alter: true });
exports.default = Model;
//# sourceMappingURL=user-model.js.map