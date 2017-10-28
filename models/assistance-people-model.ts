import * as Sequelize from 'sequelize';
import sequelize from '../utils/db-connection';

export interface ModelAttributes {
    id?: number;
    user_name?: string;
    mobile?: string;
    email?: string;
    superior?: number;
    in_charge_of?: string;
    is_main?: number;
}

export interface ModelInstance
    extends Sequelize.Instance<ModelAttributes>, ModelAttributes { };
/**
 * 可以选择的协助人信息，此类人不一定在业务用户表中，所以需要单独设置
 */
var Model = sequelize.define<ModelInstance, ModelAttributes>(
    'AssistancePeople', {
        user_name: Sequelize.STRING,
        mobile: Sequelize.STRING,
        email: {
            type: Sequelize.STRING,
            validate: { isEmail: true }
        },
        superior: Sequelize.INTEGER,//上级主管
        in_charge_of: Sequelize.STRING,//负责的功能，字符串：逗号分割
        is_main: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            comment: '是否主要负责人，0[否]，1[是]'
        }
    }, {
        underscored: true,
        tableName: 'assistance_people',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);

Model.sync({ alter: true });

export default Model;