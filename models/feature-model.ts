import { DataTypes, Model,  } from 'sequelize';
import sequelize from '../utils/db-connection';

/**
 * 功能列表，只是提供一个可以选择的列表
 */
class FeatureModel extends Model { }
FeatureModel.init({
    feature_name: DataTypes.STRING,
}, {
    sequelize,
    underscored: true,
    tableName: 'features',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
})

FeatureModel.sync();

export default FeatureModel;
