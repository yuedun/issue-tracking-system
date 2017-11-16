"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var db_connection_1 = require("../utils/db-connection");
;
var Model = db_connection_1.default.define('AssistancePeople', {
    user_name: Sequelize.STRING,
    mobile: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        validate: { isEmail: true }
    },
    superior: Sequelize.INTEGER,
    features: Sequelize.STRING,
}, {
    underscored: true,
    tableName: 'assistance_people',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
});
exports.default = Model;
//# sourceMappingURL=assistance-people-model.js.map