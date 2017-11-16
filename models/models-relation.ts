import AssistancePeopleModel from './assistance-people-model';
import AssistanceModel from './assistance-model';
import FeatureModel from './feature-model';
import PeopleFreatureModel from './people-feature-model';
import UsersModel from './users-model';

AssistanceModel.belongsTo(UsersModel, { constraints: false });//不在数据库加约束
UsersModel.belongsToMany(FeatureModel, { through: "PeopleFeature", foreignKey: "assis_people_id" });
AssistancePeopleModel.belongsToMany(FeatureModel, { through: "PeopleFeature", foreignKey: "assis_people_id" });
FeatureModel.belongsToMany(AssistancePeopleModel, { through: "PeopleFeature", foreignKey: "feature_id" });