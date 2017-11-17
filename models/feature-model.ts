import * as Sequelize from 'sequelize';
import sequelize from '../utils/db-connection';

export interface ModelAttributes {
    id?: number;
    feature_name?: string;
}

export interface ModelInstance
    extends Sequelize.Instance<ModelAttributes> {

};
/**
 * 功能列表，只是提供一个可以选择的列表
 */
var Model = sequelize.define<ModelInstance, ModelAttributes>(
    'Features', {
        feature_name: Sequelize.STRING,
    }, {
        underscored: true,
        tableName: 'features',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);
Model.sync({ alter: false });

export default Model;
