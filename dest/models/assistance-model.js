"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var db_connection_1 = require("../utils/db-connection");
;
var Model = db_connection_1.default.define('Assistance', {
    title: Sequelize.STRING,
    description: Sequelize.STRING
}, {
    timestamps: true,
    underscored: true,
    tableName: 'assistance'
});
Model.sync();
exports.default = Model;
//# sourceMappingURL=assistance-model.js.map