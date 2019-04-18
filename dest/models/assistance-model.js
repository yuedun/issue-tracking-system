"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../utils/db-connection");
class AssistanceModel extends sequelize_1.Model {
}
exports.default = AssistanceModel;
AssistanceModel.init({
    user_id: sequelize_1.DataTypes.INTEGER,
    description: sequelize_1.DataTypes.STRING,
    first_helper: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0
    },
    second_helper: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0
    },
    user_mobile: sequelize_1.DataTypes.STRING,
    user_agent: sequelize_1.DataTypes.STRING,
    referer: sequelize_1.DataTypes.STRING,
    images: sequelize_1.DataTypes.STRING,
    urgency_level: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false,
        comment: '紧急程度:暂定0[2小时内]，1[4小时内]，2[今日内]，3[明日内]'
    },
    state: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
        comment: '解决状态，0[未解决]，1[解决中]，2[已解决]'
    },
}, {
    sequelize: db_connection_1.default,
    underscored: true,
    tableName: 'assistance',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
});
AssistanceModel.sync();
//# sourceMappingURL=assistance-model.js.map