import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/db-connection';

class HelperModel extends Model {
    public features: string;
}
HelperModel.init({
    user_name: DataTypes.STRING,
    mobile: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        validate: { isEmail: true }
    },
    superior: DataTypes.INTEGER,//上级主管
    features: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
        comment: "负责的功能，字符串：逗号分割"
    },//负责的功能，字符串：逗号分割
}, {
        sequelize,
        underscored: true,
        tableName: 'helpers',
        charset: 'utf8',
        collate: 'utf8_unicode_ci'

    })

HelperModel.sync();

export default HelperModel;