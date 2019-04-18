"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../utils/db-connection");
class HelperFeatureModel extends sequelize_1.Model {
}
HelperFeatureModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    helper_id: sequelize_1.DataTypes.INTEGER,
    feature_id: sequelize_1.DataTypes.INTEGER,
}, {
    sequelize: db_connection_1.default,
    underscored: true,
    tableName: 'helper_feature_relation',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
});
HelperFeatureModel.sync();
exports.default = HelperFeatureModel;
//# sourceMappingURL=helper-feature-relation-model.js.map