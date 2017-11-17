"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var db_connection_1 = require("../utils/db-connection");
;
var Model = db_connection_1.default.define('Features', {
    feature_name: Sequelize.STRING,
}, {
    underscored: true,
    tableName: 'features',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
});
Model.sync({ alter: false });
exports.default = Model;
//# sourceMappingURL=feature-model.js.map