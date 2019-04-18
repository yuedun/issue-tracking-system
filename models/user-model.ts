import { DataTypes, Model, HasManyGetAssociationsMixin, } from 'sequelize';
import sequelize from '../utils/db-connection';
import AssistanceModel from './assistance-model';

/**
 * 用户表，该表为实际业务人员信息表
 */
export class UserModel extends Model {
    public user_name?:string;
    public getAssistanceModels: HasManyGetAssociationsMixin<AssistanceModel>;//这个方法要从实例对象的__proto__查找
}
UserModel.init({
    user_name: DataTypes.STRING(10),
    mobile: DataTypes.STRING(11)
}, {
        sequelize,
        underscored: true,
        tableName: 'user',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);
UserModel.sync();

export default UserModel;
