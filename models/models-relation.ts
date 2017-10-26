import AssistanceModel from '../models/assistance-model';
import AssistancePeopleModel from '../models/assistance-people-model';
import UserModel from '../models/user-model';

AssistanceModel.belongsTo(UserModel);