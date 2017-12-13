import * as Router from 'koa-router';
import * as moment from 'moment';
import * as Bluebird from 'bluebird';

const router = new Router(
	// {
	// 	prefix: "/platform"
	// }
);
const debug = require('debug')('yuedun:platform');
import { select } from '../utils/db-connection';
import { default as UserModel, ModelAttributes as UserPOJO, ModelInstance as UserInstance } from '../models/users-model';
import { default as AssistanceModel, ModelAttributes as AssistancePOJO, ModelInstance as AssistanceInstance } from '../models/assistance-model';
import { default as HelperModel, ModelAttributes as HelperPOJO, ModelInstance as HelperInstance } from '../models/helper-model';
import { default as FeatureModel, ModelAttributes as FeaturePOJO, ModelInstance as FeatureInstance } from '../models/feature-model';
/**
 * render 函数是koa-views中间件赋予ctx的，是一个promise函数，所以需要用await修饰
 */
router.get('/platform', async function (ctx: any) {
	debug(">>>admin输出");
	await ctx.render('platform', {
		title: 'hello platform',
		body: "<h1>这是管理平台</h1>"
	})
});

router.get('/teacher', async function (ctx: any) {
	debug(">>>teacher输出");
	await ctx.render('teacher', {
		title: 'hello teacher',
		body: "<h1>这是老师APP</h1>"
	})
});

router.get('/client', async function (ctx: any) {
	debug(">>>client输出");
	await ctx.render('client', {
		title: 'hello client',
		body: "<h1>这是教学客户端</h1>"
	})
});

router.get('/others/a', async function (ctx: any) {
	debug(">>>admin输出");
	await ctx.render('platform', {
		title: 'hello platform',
		body: "<h1>这是管理平台</h1>"
	})
});

router.get('/others/b', async function (ctx: any) {
	debug(">>>admin输出");
	await ctx.render('platform', {
		title: 'hello platform',
		body: "<h1>这是管理平台</h1>"
	})
});

router.get('/others/c', async function (ctx: any) {
	debug(">>>admin输出");
	await ctx.render('platform', {
		title: 'hello platform',
		body: "<h1>这是管理平台</h1>"
	})
});

interface AssistanceInfo extends AssistanceInstance {
	user_name?: string;
	imageArr?: string[];
}
/**
 * 协助列表
 */
router.get('/platform/assistance-list', async function (ctx: any) {
	let userAgent = ctx.req.headers['user-agent'];
	let referer = ctx.req.headers['referer'];
	let assistancies = await AssistanceModel.findAll({
		order: [['created_at', 'desc']]
	});
	let assistanceInfos: AssistanceInfo[] = assistancies;
	await Bluebird.map(assistanceInfos, async (item, index) => {
		let userRecord = await item.getUser();
		item.user_name = userRecord ? userRecord.user_name : "无";//发起协助的用户名（业务用户users）
		item.imageArr = item.images ? item.imageArr = item.images.split(",") : [];

		item.setDataValue("created_at", moment(item.created_at).format("YYYY-MM-DD HH:ss:mm"));
		return item;
	})
	await ctx.render('assistance-list', {
		title: '申请协助',
		userAgent,
		referer,
		assistanceInfos
	})
});

/**
 * 新建协助页面
 */
router.get('/platform/new-assistance', async function (ctx: any) {
	let userAgent = ctx.req.headers['user-agent'];
	let referer = ctx.req.headers['referer'];
	let assistancies = await AssistanceModel.findAll({
		order: [['created_at', 'desc']]
	});
	let assistanceInfos: AssistanceInfo[] = assistancies;
	await Bluebird.map(assistanceInfos, async (item, index) => {
		item.setDataValue("created_at", moment(item.created_at).format("YYYY-MM-DD HH:ss:mm"));
		return item;
	})
	await ctx.render('ask-for-help', {
		title: '申请协助',
		userAgent,
		referer,
		assistanceInfos,
		api: {
			assistance: '/platform/help'
		}
	})
});

/**
 * 创建协助请求
 */
router.post('/platform/help', async function (ctx: any) {
	let args = ctx.request.body;
	let assistance = await AssistanceModel.create({
		description: args.description,
		first_helper: args.first_helper ? parseInt(args.first_helper) : 0,
		second_helper: args.second_helper ? parseInt(args.second_helper) : 0,
		user_mobile: args.user_mobile,
		referer: args.referer,
		user_agent: args.user_agent,
		user_id: 1,
		state: 0
	})
	ctx.body = {
		msg: "创建成功",
		assistance: assistance,
		url: {
			assistanceList: "/platform/assistance-list"
		}
	}
});
/**
 * 删除协助
 */
router.delete('/platform/help/:id', async function (ctx: any) {
	let [id] = ctx.captures;
	debug(">>>>>>>>>>>>>delete", id)
	let assistance = await AssistanceModel.destroy({
		where: { id }
	})
	ctx.body = {
		msg: "删除成功"
	}
});

/**
 * 获取协助人
 * /platform/helper/features
 */
router.get('/platform/helper/features', async function (ctx: any) {
	let args = ctx.request.query;
	let helperList = await HelperModel.findAll({
		attributes: ["id", "user_name", "features"],
		where: {
			user_name: { $like: `${args.user_name}%` }
		}
	})
	ctx.body = {
		msg: "获取成功",
		data: {
			list: helperList
		}
	}
});

export default router
