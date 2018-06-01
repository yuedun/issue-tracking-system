const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);//node 8.0新增api

export function rf(path:string) {
	return fs.readFile(path);
}
