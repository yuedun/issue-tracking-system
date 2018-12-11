"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var db_connection_1 = require("../utils/db-connection");
;
var Model = db_connection_1.default.define('PeopleFeature', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    assis_people_id: Sequelize.INTEGER,
    feature_id: Sequelize.INTEGER,
}, {
    underscored: true,
    tableName: 'people_feature_relation',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
});
exports.default = Model;
//# sourceMappingURL=people-feature-relation-model.js.map