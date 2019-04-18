import HelperModel from './helper-model';
import AssistanceModel from './assistance-model';
import FeatureModel from './feature-model';
import PeopleFreatureModel from './helper-feature-relation-model';
import UsersModel from './user-model';

AssistanceModel.belongsTo(UsersModel, { constraints: false, foreignKey: 'user_id' });//不在数据库加约束
UsersModel.hasMany(AssistanceModel, { foreignKey: 'user_id' });
// HelperModelModel.belongsToMany(FeatureModel, { through: PeopleFreatureModel, foreignKey: "helper_id" });
// FeatureModel.belongsToMany(HelperModel, { through: PeopleFreatureModel, foreignKey: "feature_id" });
//through如果是字符串会自动创建PeopleFreatureModel，如果要自定义PeopleFreatureModel内容就先定义该model
