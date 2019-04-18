import { DataTypes, Model, } from 'sequelize';
import sequelize from '../utils/db-connection';

export interface ModelAttributes {
    id?: number;
    helper_id?: number;
    feature_id?: number;
}

/**
 * 功能列表
 */
class HelperFeatureModel extends Model { }
HelperFeatureModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },//如果不指定的话，会由assistance-people和feature自动指定helper_id和feature_id为主键，不能在添加id为主键
    helper_id: DataTypes.INTEGER,
    feature_id: DataTypes.INTEGER,
}, {
        sequelize,
        underscored: true,
        tableName: 'helper_feature_relation',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);

HelperFeatureModel.sync();

export default HelperFeatureModel;