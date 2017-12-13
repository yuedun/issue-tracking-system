import * as Sequelize from 'sequelize';
import { mysql, sequelizeLog } from '../config';
//新的操作符 [Op.and]: {a: 5} 等于 AND (a = 5)
const Op = Sequelize.Op;

const operatorsAliases = {
	$eq: Op.eq,
	$ne: Op.ne,
	$gte: Op.gte,
	$gt: Op.gt,
	$lte: Op.lte,
	$lt: Op.lt,
	$not: Op.not,
	$in: Op.in,
	$notIn: Op.notIn,
	$is: Op.is,
	$like: Op.like,
	$notLike: Op.notLike,
	$iLike: Op.iLike,
	$notILike: Op.notILike,
	$regexp: Op.regexp,
	$notRegexp: Op.notRegexp,
	$iRegexp: Op.iRegexp,
	$notIRegexp: Op.notIRegexp,
	$between: Op.between,
	$notBetween: Op.notBetween,
	$overlap: Op.overlap,
	$contains: Op.contains,
	$contained: Op.contained,
	$adjacent: Op.adjacent,
	$strictLeft: Op.strictLeft,
	$strictRight: Op.strictRight,
	$noExtendRight: Op.noExtendRight,
	$noExtendLeft: Op.noExtendLeft,
	$and: Op.and,
	$or: Op.or,
	$any: Op.any,
	$all: Op.all,
	$values: Op.values,
	$col: Op.col
};

const sequelize = new Sequelize(mysql.db, mysql.username, mysql.password, {
	host: mysql.host,
	dialect: 'mysql',

	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
	operatorsAliases,
	logging: sequelizeLog
});

export function select(sql: string) {
	return sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })
}

export default sequelize;

require("../models/models-relation");
