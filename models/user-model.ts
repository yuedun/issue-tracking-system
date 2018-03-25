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
 * 用户表，该表为实际业务人员信息表
 */
var Model = sequelize.define<ModelInstance, ModelAttributes>(
    'Users', {
        user_name: Sequelize.STRING(10),
        mobile: Sequelize.STRING(11)
    }, {
        underscored: true,
        tableName: 'user',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);
Model.sync({ alter: false });

export default Model;
