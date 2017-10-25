import * as Sequelize from 'sequelize';
import sequelize from '../utils/db-connection';

/**
 * 定义方式@types/sequelize GitHub上有示例
 */
export interface ModelAttributes {
    id?: number;
    user_id?: number;
    description?: string;
    first_help_people?: string;
    second_help_people?: string;
    user_agent?: string;
    referer?: string;
    urgency_level?: number;
    state?: number;
}

export interface ModelInstance
    extends Sequelize.Instance<ModelInstance>, ModelAttributes { };
/**
 * 申请的协助信息
 */
var Model = sequelize.define<ModelInstance, ModelAttributes>(
    'Assistance', {
        user_id: Sequelize.INTEGER,//发贴人
        description: Sequelize.STRING,
        first_help_people: Sequelize.STRING,
        second_help_people: Sequelize.STRING,
        user_agent:Sequelize.STRING,//浏览器
        referer: Sequelize.STRING,//来源页面
        urgency_level: {
            type: Sequelize.INTEGER,
            defaultValue: 1,
            allowNull: false,
            comment: '紧急程度:暂定0[2小时内]，1[4小时内]，2[今日内]，3[明日内]'
        },
        state: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: false,
            comment: '解决状态，0[未解决]，1[解决中]，2[已解决]'
        },
    }, {
        underscored: true,
        tableName: 'assistance',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);

Model.sync({ alter: true });

export default Model;