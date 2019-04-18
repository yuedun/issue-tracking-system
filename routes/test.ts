import { default as UserModel } from "../models/user-model";
const debug = require('debug')('yuedun:test');
class Controller {
	/**
	 * index
	 */
    public async index(ctx: any) {
        let user = await UserModel.findByPk(1);
        let ass = await user.getAssistanceModels();
        await ctx.render('client', {
            title: 'hello client',
            body: "<h1>这是教学客户端</h1>"
        })
    }
}

export default new Controller();