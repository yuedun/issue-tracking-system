const router = require('koa-router')()
router.prefix('/test')

import { default as UserModel, ModelAttributes as UserPOJO, ModelInstance as UserInstance } from '../models/user-model';

// router.get('/', async function (ctx: any, next: Function) {
// 	let user = await UserModel.findById(1);
// 	console.log(">>>>>>>>>>>",JSON.stringify(user));
	
// 	ctx.body = {
// 		user
// 	}
// })

export default router
