import { DataTypes, Model, BelongsToGetAssociationMixin, HasOneGetAssociationMixin, } from 'sequelize';
import sequelize from '../utils/db-connection';
import { default as User } from "./user-model";

/**
 * 申请的协助信息
 */
export default class AssistanceModel extends Model<User> {
    public user_id?: number;
    public images?: string;
    public getUserModel: BelongsToGetAssociationMixin<User>;//这个方法要从实例对象的__proto__查找
}
AssistanceModel.init({
    user_id: DataTypes.INTEGER,//发贴人
    description: DataTypes.STRING,
    first_helper: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    second_helper: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    user_mobile: DataTypes.STRING,//需要查询的用户手机
    user_agent: DataTypes.STRING,//浏览器
    referer: DataTypes.STRING,//来源页面
    images: DataTypes.STRING,//图片
    urgency_level: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false,
        comment: '紧急程度:暂定0[2小时内]，1[4小时内]，2[今日内]，3[明日内]'
    },
    state: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
        comment: '解决状态，0[未解决]，1[解决中]，2[已解决]'
    },
}, {
        sequelize,
        underscored: true,
        tableName: 'assistance',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);

AssistanceModel.sync();

// Model.belongsTo(UserModel, { constraints: false });//不在数据库加约束
// Model.belongsTo(UserModel, {as: 'u',foreignKey: 'uu_id'});
//给user表起一个别名，会在assistance表加一个u_id外键，而不是user_id，如果直接指定foreignKey则使用uu_id作为外键
//belongTo和hasOne都可以用作1：1关系，区别在于belongTo会在源表加外键，hasOne会在目标表加外键
//源.belongTo(目标)，源.hasOne(目标)
