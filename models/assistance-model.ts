import * as Sequelize from 'sequelize';
import sequelize from '../utils/db-connection';

/**
 * 定义方式@types/sequelize GitHub上有示例
 */
export interface ModelAttributes {
    title:string;
    description: string;
}

export interface ModelInstance
    extends Sequelize.Instance<ModelInstance>, ModelAttributes { };

var Model = sequelize.define<ModelInstance, ModelAttributes>(
    'Assistance', {
        title: Sequelize.STRING,
        description: Sequelize.STRING
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'assistance'
    }
);

Model.sync();

export default Model;