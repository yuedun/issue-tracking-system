"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assistance_people_model_1 = require("./assistance-people-model");
var user_model_1 = require("./user-model");
var assistance_model_1 = require("./assistance-model");
//这种方法设置associate会出现import的进来的mondel可能为undefined的情况
console.log(">>>>>>2");
console.log(">>>>>>>>>>AssistanceModel", assistance_model_1.default);
console.log(">>>>>>>>>>AssistancePeopleModel", assistance_people_model_1.default);
console.log(">>>>>>>>>>UserModel", user_model_1.default);
// AssistanceModel.belongsTo(UserModel);
// UserModel.hasOne(AssistanceModel); 
//# sourceMappingURL=models-relation.js.map