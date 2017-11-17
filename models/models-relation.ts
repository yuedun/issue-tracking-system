import AssistancePeopleModel from './assistance-people-model';
import AssistanceModel from './assistance-model';
import FeatureModel from './feature-model';
import PeopleFreatureModel from './people-feature-relation-model';
import UsersModel from './users-model';

AssistanceModel.belongsTo(UsersModel, { constraints: false });//不在数据库加约束
// AssistancePeopleModel.belongsToMany(FeatureModel, { through: PeopleFreatureModel, foreignKey: "assis_people_id" });
// FeatureModel.belongsToMany(AssistancePeopleModel, { through: PeopleFreatureModel, foreignKey: "feature_id" });
//through如果是字符串会自动创建PeopleFreatureModel，如果要自定义PeopleFreatureModel内容就先定义该model
