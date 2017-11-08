import * as Sequelize from 'sequelize';
import sequelize from '../utils/db-connection';
import { default as AssistanceModel, ModelInstance as AssistanceInstance } from './assistance-model';

export interface ModelAttributes {
    id?: number;
    user_name?: string;
    mobile?: string;
}

export interface ModelInstance
    extends Sequelize.Instance<ModelAttributes>, ModelAttributes { };
/**
 * 用户表，该表为实际业务人员信息表
 */
var Model = sequelize.define<ModelInstance, ModelAttributes>(
    'User', {
        user_name: Sequelize.STRING(10),
        mobile: Sequelize.STRING(11)
    }, {
        underscored: true,
        tableName: 'users',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);

Model.sync({ alter: true });

export default Model;