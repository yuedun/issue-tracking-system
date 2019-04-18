"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../utils/db-connection");
class UserModel extends sequelize_1.Model {
}
exports.UserModel = UserModel;
UserModel.init({
    user_name: sequelize_1.DataTypes.STRING(10),
    mobile: sequelize_1.DataTypes.STRING(11)
}, {
    sequelize: db_connection_1.default,
    underscored: true,
    tableName: 'user',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
});
UserModel.sync();
exports.default = UserModel;
//# sourceMappingURL=user-model.js.map