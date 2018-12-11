"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var db_connection_1 = require("../utils/db-connection");
;
var Model = db_connection_1.default.define('Helper', {
    user_name: Sequelize.STRING,
    mobile: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        validate: { isEmail: true }
    },
    superior: Sequelize.INTEGER,
    features: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
        comment: "负责的功能，字符串：逗号分割"
    },
}, {
    underscored: true,
    tableName: 'helpers',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
});
Model.sync({ alter: true });
exports.default = Model;
//# sourceMappingURL=helper-model.js.map