"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assistance_people_model_1 = require("./assistance-people-model");
var assistance_model_1 = require("./assistance-model");
var feature_model_1 = require("./feature-model");
var users_model_1 = require("./users-model");
assistance_model_1.default.belongsTo(users_model_1.default, { constraints: false });
users_model_1.default.belongsToMany(feature_model_1.default, { through: "PeopleFeature", foreignKey: "assis_people_id" });
assistance_people_model_1.default.belongsToMany(feature_model_1.default, { through: "PeopleFeature", foreignKey: "assis_people_id" });
feature_model_1.default.belongsToMany(assistance_people_model_1.default, { through: "PeopleFeature", foreignKey: "feature_id" });
//# sourceMappingURL=models-relation.js.map