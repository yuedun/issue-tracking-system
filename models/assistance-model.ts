import * as Sequelize from 'sequelize';
import sequelize from '../utils/db-connection';
import { default as UserModel, ModelInstance as UserInstance } from './users-model';
/**
 * 定义方式@types/sequelize GitHub上有示例
 */
export interface ModelAttributes {
    id?: number;
    user_id?: number;
    description?: string;
    first_helper?: number;
    second_helper?: number;
    user_mobile?: string;
    user_agent?: string;
    referer?: string;
    images?: string;
    urgency_level?: number;
    state?: number;
    created_at?: string;
    updated_at?: string;
}

export interface ModelInstance
    extends Sequelize.Instance<ModelAttributes>, ModelAttributes {
    getUser: Sequelize.BelongsToGetAssociationMixin<UserInstance>;
};
/**
 * 申请的协助信息
 */
var Model = sequelize.define<ModelInstance, ModelAttributes>(
    'Assistance', {
        user_id: Sequelize.INTEGER,//发贴人
        description: Sequelize.STRING,
        first_helper: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        second_helper: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        user_mobile: Sequelize.STRING,//需要查询的用户手机
        user_agent: Sequelize.STRING,//浏览器
        referer: Sequelize.STRING,//来源页面
        images: Sequelize.STRING,//图片
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

// Model.belongsTo(UserModel, { constraints: false });//不在数据库加约束
// Model.belongsTo(UserModel, {as: 'u',foreignKey: 'uu_id'});
//给user表起一个别名，会在assistance表加一个u_id外键，而不是user_id，如果直接指定foreignKey则使用uu_id作为外键
//belongTo和hasOne都可以用作1：1关系，区别在于belongTo会在源表加外键，hasOne会在目标表加外键
//源.belongTo(目标)，源.hasOne(目标)
