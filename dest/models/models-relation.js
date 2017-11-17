"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assistance_model_1 = require("./assistance-model");
var users_model_1 = require("./users-model");
assistance_model_1.default.belongsTo(users_model_1.default, { constraints: false });
//# sourceMappingURL=models-relation.js.map