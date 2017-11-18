import * as Sequelize from 'sequelize';
import sequelize from '../utils/db-connection';

export interface ModelAttributes {
    id?: number;
    helper_id?: number;
    feature_id?: number;
}

export interface ModelInstance
    extends Sequelize.Instance<ModelAttributes> {

};
/**
 * 功能列表
 */
var Model = sequelize.define<ModelInstance, ModelAttributes>(
    'HelperFeature', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },//如果不指定的话，会由assistance-people和feature自动指定helper_id和feature_id为主键，不能在添加id为主键
        helper_id: Sequelize.INTEGER,
        feature_id: Sequelize.INTEGER,
    }, {
        underscored: true,
        tableName: 'helper_feature_relation',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);

// Model.sync({alter: true });

export default Model;