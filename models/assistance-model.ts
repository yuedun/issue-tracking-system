import * as Sequelize from 'sequelize';
import sequelize from '../utils/db-connection';

/**
 * 定义方式@types/sequelize GitHub上有示例
 */
export interface ModelAttributes {
    id?: number;
    title?: string;
    description?: string;
    first_help_people?: string;
    second_help_people?: string;
    user_agent?: string;
    referer?: string;
}

export interface ModelInstance
    extends Sequelize.Instance<ModelInstance>, ModelAttributes { };

var Model = sequelize.define<ModelInstance, ModelAttributes>(
    'Assistance', {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        first_help_people: Sequelize.STRING,
        second_help_people: Sequelize.STRING,
        user_agent:Sequelize.STRING,
        referer: Sequelize.STRING,
    }, {
        underscored: true,
        tableName: 'assistance',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);

Model.sync({ alter: true });

export default Model;