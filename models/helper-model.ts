import * as Sequelize from 'sequelize';
import sequelize from '../utils/db-connection';

export interface ModelAttributes {
    id?: number;
    user_name?: string;
    mobile?: string;
    email?: string;
    superior?: number;
    features?: string;
}

export interface ModelInstance
    extends Sequelize.Instance<ModelAttributes>, ModelAttributes { };

var Model = sequelize.define<ModelInstance, ModelAttributes>(
    'Helper', {
        user_name: Sequelize.STRING,
        mobile: Sequelize.STRING,
        email: {
            type: Sequelize.STRING,
            validate: { isEmail: true }
        },
        superior: Sequelize.INTEGER,//上级主管
        features: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: "",
            comment: "负责的功能，字符串：逗号分割"
        },//负责的功能，字符串：逗号分割
    }, {
        underscored: true,
        tableName: 'helpers',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);
Model.sync({ alter: true });

export default Model;