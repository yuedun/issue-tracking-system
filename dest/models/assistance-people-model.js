"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var db_connection_1 = require("../utils/db-connection");
;
/**
 * 可以选择的协助人信息，此类人不一定在业务用户表中，所以需要单独设置
 */
var Model = db_connection_1.default.define('AssistancePeople', {
    user_name: Sequelize.STRING,
    mobile: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        validate: { isEmail: true }
    },
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
//# sourceMappingURL=assistance-people-model.js.map