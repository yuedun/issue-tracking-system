import * as Sequelize from 'sequelize';
import sequelize from '../utils/db-connection';

/**
 * 定义方式@types/sequelize GitHub上有示例
 */
export interface ModelAttributes {
    id?: number;
    title?:string;
    abcDef?: string;
    description?: string;
}

export interface ModelInstance
    extends Sequelize.Instance<ModelInstance>, ModelAttributes { };

var Model = sequelize.define<ModelInstance, ModelAttributes>(
    'Assistance', {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        abcDef: Sequelize.STRING
    }, {
        underscored: true,
        tableName: 'assistance',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);

Model.sync({alter: true});

export default Model;