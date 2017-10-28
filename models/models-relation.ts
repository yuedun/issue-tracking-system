import AssistancePeopleModel from './assistance-people-model';
import UserModel from './user-model';
import AssistanceModel from './assistance-model';
//这种方法设置associate会出现import的进来的mondel可能为undefined的情况
console.log(">>>>>>2")
console.log(">>>>>>>>>>AssistanceModel", AssistanceModel);
console.log(">>>>>>>>>>AssistancePeopleModel", AssistancePeopleModel);
console.log(">>>>>>>>>>UserModel", UserModel);

// AssistanceModel.belongsTo(UserModel);
// UserModel.hasOne(AssistanceModel);