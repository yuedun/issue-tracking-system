import { Sequelize, DataTypes, Model, } from 'sequelize';
import sequelize from '../utils/db-connection';

/**
 * 功能列表
 */
class PeopleFeatureModel extends Model { }
PeopleFeatureModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },//如果不指定的话，会由assistance-people和feature自动指定assis_people_id和feature_id为主键，不能在添加id为主键
    assis_people_id: DataTypes.INTEGER,
    feature_id: DataTypes.INTEGER,
}, {
        sequelize,
        underscored: true,
        tableName: 'people_feature_relation',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);

PeopleFeatureModel.sync();

export default PeopleFeatureModel;