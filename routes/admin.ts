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
import { default as PeopleFeatureModel, ModelAttributes as PeopleFeaturePOJO, ModelInstance as PeopleFeatureInstance } from '../models/people-feature-relation-model';

/**
 * 协助人和功能关联
 */
router.post('/people/features', async function (ctx: any, next: Function) {
	let args = ctx.request.body;
	let peopleFeature = await PeopleFeatureModel.create({
		assis_people_id: args.people_id,
		feature_id: args.feature_id
	})
	ctx.body = {
		msg: "创建成功",
		peopleFeature
	}
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
router.post('/assitance-people', async function (ctx: any, next: Function) {
	let args = ctx.request.body;
	debug(">>>>>>>>>>>>>post assistance people:", args)
	let assistancePeople = await AssistancePeopleModel.create({
		user_name: args.user_name,
		mobile: args.mobile,
		email: args.email
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
		email: args.email
	}, {
			where: { id: 1 }
		})
	ctx.body = {
		msg: "修改成功",
		assistancePeople
	}
});

/**
 * 协助人添加负责模块
 */
router.patch('/assitance-people/features', async function (ctx: any, next: Function) {
	let args = ctx.request.body;
	let assistancePeople = await AssistancePeopleModel.findById(args.person_id)
	assistancePeople.features = assistancePeople.features.concat(",", args.feature_name);
	assistancePeople.save();
	ctx.body = {
		msg: "修改成功",
		assistancePeople
	}
});

export default router
