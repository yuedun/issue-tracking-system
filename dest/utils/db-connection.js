"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
const sequelize = new sequelize_1.Sequelize(config_1.mysql.db, config_1.mysql.username, config_1.mysql.password, {
    host: config_1.mysql.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    logging: function (msg) {
        if (config_1.sequelizeLog) {
            console.log(msg);
        }
    }
});
sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
    .catch(err => {
    console.error('Unable to connect to the database:', err);
});
function select(sql) {
    return sequelize.query(sql, { type: sequelize_1.QueryTypes.SELECT });
}
exports.select = select;
exports.default = sequelize;
require("../models/models-relation");
//# sourceMappingURL=db-connection.js.map