"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var db_connection_1 = require("../utils/db-connection");
;
var Model = db_connection_1.default.define('HelperFeature', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    helper_id: Sequelize.INTEGER,
    feature_id: Sequelize.INTEGER,
}, {
    underscored: true,
    tableName: 'helper_feature_relation',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
});
exports.default = Model;
//# sourceMappingURL=helper-feature-relation-model.js.map