import { DataTypes, Model, } from 'sequelize';
import sequelize from '../utils/db-connection';

/**
 * 用户表，该表为实际业务人员信息表
 */
export class UserModel extends Model {
    public user_name?:string;
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
