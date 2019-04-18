"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
var debug = require('debug')('yuedun:db-connection');
const config_1 = require("../config");
const operatorsAliases = {
    $eq: sequelize_1.Op.eq,
    $ne: sequelize_1.Op.ne,
    $gte: sequelize_1.Op.gte,
    $gt: sequelize_1.Op.gt,
    $lte: sequelize_1.Op.lte,
    $lt: sequelize_1.Op.lt,
    $not: sequelize_1.Op.not,
    $in: sequelize_1.Op.in,
    $notIn: sequelize_1.Op.notIn,
    $is: sequelize_1.Op.is,
    $like: sequelize_1.Op.like,
    $notLike: sequelize_1.Op.notLike,
    $iLike: sequelize_1.Op.iLike,
    $notILike: sequelize_1.Op.notILike,
    $regexp: sequelize_1.Op.regexp,
    $notRegexp: sequelize_1.Op.notRegexp,
    $iRegexp: sequelize_1.Op.iRegexp,
    $notIRegexp: sequelize_1.Op.notIRegexp,
    $between: sequelize_1.Op.between,
    $notBetween: sequelize_1.Op.notBetween,
    $overlap: sequelize_1.Op.overlap,
    $contains: sequelize_1.Op.contains,
    $contained: sequelize_1.Op.contained,
    $adjacent: sequelize_1.Op.adjacent,
    $strictLeft: sequelize_1.Op.strictLeft,
    $strictRight: sequelize_1.Op.strictRight,
    $noExtendRight: sequelize_1.Op.noExtendRight,
    $noExtendLeft: sequelize_1.Op.noExtendLeft,
    $and: sequelize_1.Op.and,
    $or: sequelize_1.Op.or,
    $any: sequelize_1.Op.any,
    $all: sequelize_1.Op.all,
    $col: sequelize_1.Op.col
};
const sequelize = new sequelize_1.Sequelize(config_1.mysql.db, config_1.mysql.username, config_1.mysql.password, {
    host: config_1.mysql.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    operatorsAliases,
    logging: function (msg) {
        if (config_1.sequelizeLog) {
            debug(msg);
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