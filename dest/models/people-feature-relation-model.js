"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../utils/db-connection");
class PeopleFeatureModel extends sequelize_1.Model {
}
PeopleFeatureModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    assis_people_id: sequelize_1.DataTypes.INTEGER,
    feature_id: sequelize_1.DataTypes.INTEGER,
}, {
    sequelize: db_connection_1.default,
    underscored: true,
    tableName: 'people_feature_relation',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
});
PeopleFeatureModel.sync();
exports.default = PeopleFeatureModel;
//# sourceMappingURL=people-feature-relation-model.js.map