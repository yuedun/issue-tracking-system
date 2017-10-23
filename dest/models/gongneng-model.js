"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var db_connection_1 = require("../utils/db-connection");
;
/**
 * 可以选择的协助人信息
 */
var Model = db_connection_1.default.define('AssistancePeople', {
    user_name: Sequelize.STRING,
    mobile: Sequelize.STRING,
    email: Sequelize.STRING,
    superior: Sequelize.INTEGER,
    in_charge_of: Sequelize.STRING,
    is_main: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: '是否主要负责人，0[否]，1[是]'
    }
}, {
    underscored: true,
    tableName: 'assistance_people',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
});
Model.sync({ alter: true });
exports.default = Model;
//# sourceMappingURL=gongneng-model.js.map