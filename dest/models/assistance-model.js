"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var db_connection_1 = require("../utils/db-connection");
;
var Model = db_connection_1.default.define('Assistance', {
    user_id: Sequelize.INTEGER,
    description: Sequelize.STRING,
    first_helper: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    second_helper: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    user_agent: Sequelize.STRING,
    referer: Sequelize.STRING,
    images: Sequelize.STRING,
    urgency_level: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false,
        comment: '紧急程度:暂定0[2小时内]，1[4小时内]，2[今日内]，3[明日内]'
    },
    state: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
        comment: '解决状态，0[未解决]，1[解决中]，2[已解决]'
    },
}, {
    underscored: true,
    tableName: 'assistance',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
});
Model.sync({ alter: true });
exports.default = Model;
//# sourceMappingURL=assistance-model.js.map