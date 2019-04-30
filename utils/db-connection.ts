import { Sequelize, QueryTypes } from 'sequelize';
import { mysql, sequelizeLog } from '../config';
//新的操作符 [Op.and]: {a: 5} 等于 AND (a = 5)
// v5开始默认支持operatorsAliases

const sequelize = new Sequelize(mysql.db, mysql.username, mysql.password, {
	host: mysql.host,
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
	logging: function (msg: string) {
		if (sequelizeLog) {
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
	
export function select(sql: string) {
	return sequelize.query(sql, { type: QueryTypes.SELECT })
}

export default sequelize;

require("../models/models-relation");
