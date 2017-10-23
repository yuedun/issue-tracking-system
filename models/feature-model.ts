import * as Sequelize from 'sequelize';
import sequelize from '../utils/db-connection';

export interface ModelAttributes {
    id?: number;
    feature_name?: string;
}

export interface ModelInstance
    extends Sequelize.Instance<ModelInstance>, ModelAttributes { };
/**
 * 功能列表
 */
var Model = sequelize.define<ModelInstance, ModelAttributes>(
    'AssistancePeople', {
        feature_name: Sequelize.STRING,
    }, {
        underscored: true,
        tableName: 'features',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);

Model.sync({ alter: true });

export default Model;