"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../utils/db-connection");
class FeatureModel extends sequelize_1.Model {
}
FeatureModel.init({
    feature_name: sequelize_1.DataTypes.STRING,
}, {
    sequelize: db_connection_1.default,
    underscored: true,
    tableName: 'features',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
});
FeatureModel.sync();
exports.default = FeatureModel;
//# sourceMappingURL=feature-model.js.map