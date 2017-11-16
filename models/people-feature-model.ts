import * as Sequelize from 'sequelize';
import sequelize from '../utils/db-connection';

export interface ModelAttributes {
    id?: number;
    assis_people_id?: number;
    feature_id?: number;
}

export interface ModelInstance
    extends Sequelize.Instance<ModelAttributes> {

};
/**
 * 功能列表
 */
var Model = sequelize.define<ModelInstance, ModelAttributes>(
    'PeopleFeature', {
        assis_people_id: Sequelize.INTEGER,
        feature_id: Sequelize.INTEGER,
    }, {
        underscored: true,
        tableName: 'people_feature_relation',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);

// Model.sync({ alter: true });

export default Model;