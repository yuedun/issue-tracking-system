import * as Sequelize from 'sequelize';
import sequelize from '../utils/db-connection';

export interface ModelAttributes {
    id?: number;
    user_name?: string;
    mobile?: string;
}

export interface ModelInstance
    extends Sequelize.Instance<ModelAttributes>, ModelAttributes {
    //继承的第二个ModelAttributes如果省略会造成实例无法访问到属性
};
/**
 * 功能列表，只是提供一个可以选择的列表
 */
var Model = sequelize.define<ModelInstance, ModelAttributes>(
    'Users', {
        user_name: Sequelize.STRING,
        mobile: Sequelize.STRING
    }, {
        underscored: true,
        tableName: 'users',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);
Model.sync({ alter: true });

export default Model;
