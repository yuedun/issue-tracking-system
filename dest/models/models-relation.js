"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assistance_model_1 = require("./assistance-model");
const user_model_1 = require("./user-model");
assistance_model_1.default.belongsTo(user_model_1.default, { constraints: false, foreignKey: 'user_id' });
user_model_1.default.hasMany(assistance_model_1.default, { foreignKey: 'user_id' });
//# sourceMappingURL=models-relation.js.map