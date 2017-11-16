import * as Router from 'koa-router';
import * as moment from 'moment';
import * as Bluebird from 'bluebird';

const router = new Router(
	{
		prefix: "/admin"
	}
);
const debug = require('debug')('yuedun:admin');
import { select } from '../utils/db-connection';
import { default as UserModel, ModelAttributes as UserPOJO, ModelInstance as UserInstance } from '../models/users-model';
import { default as AssistanceModel, ModelAttributes as AssistancePOJO, ModelInstance as AssistanceInstance } from '../models/assistance-model';
import { default as AssistancePeopleModel, ModelAttributes as AssistancePeoplePOJO, ModelInstance as AssistancePeopleInstance } from '../models/assistance-people-model';
import { default as FeatureModel, ModelAttributes as FeaturePOJO, ModelInstance as FeatureInstance } from '../models/feature-model';

/**
 * 协助人和功能关联
 */
router.post('/people/features', async function (ctx: any, next: Function) {

	await ctx.render('client', {
		title: 'hello client',
		body: "<h1>这是教学客户端</h1>"
	})
});

/**
 * 创建功能模块
 */
router.post('/features', async function (ctx: any, next: Function) {
	let args = ctx.request.body;
	let feature = await FeatureModel.create({
		feature_name: args.feature_name
	})
	ctx.body = {
		msg: "创建成功",
		feature
	}
});

/**
 * 创建协助人
 */
router.post('/platform/assitance-people', async function (ctx: any, next: Function) {
	let args = ctx.request.body;
	debug(">>>>>>>>>>>>>post assistance people:", args)
	let assistancePeople = await AssistancePeopleModel.create({
		user_name: args.user_name,
		mobile: args.mobile,
		email: args.email,
		in_charge_of: args.in_charge_of,
		is_main: args.is_main,
	})
	ctx.body = {
		msg: "创建成功",
		assistancePeople
	}
});

/**
 * 修改协助人
 */
router.patch('/platform/assitance-people', async function (ctx: any, next: Function) {
	let args = ctx.request.body;
	debug(">>>>>>>>>>>>>post assistance people:", args)
	let assistancePeople = await AssistancePeopleModel.update({
		user_name: args.user_name,
		mobile: args.mobile,
		email: args.email,
		in_charge_of: args.in_charge_of
	}, {
			where: { id: 1 }
		})
	ctx.body = {
		msg: "修改成功",
		assistancePeople
	}
});

export default router
