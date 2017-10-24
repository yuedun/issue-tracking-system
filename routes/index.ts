import * as Router from 'koa-router';
const router = new Router(
	// {
	// 	prefix: "/index"
	// }
);
const debug = require('debug')('yuedun:admin');
import { select } from '../utils/db-connection';
import { default as AssistanceModel, ModelAttributes as AssistancePOJO, ModelInstance as AssistanceInstance } from '../models/assistance-model';
import { default as AssistancePeopleModel, ModelAttributes as AssistancePeoplePOJO, ModelInstance as AssistancePeopleInstance } from '../models/assistance-people-model';
/**
 * render 函数是koa-views中间件赋予ctx的，是一个promise函数，所以需要用await修饰
 */
router.get('/admin', async function (ctx: any, next: Function) {
	debug(">>>admin输出");
	await ctx.render('admin', {
		title: 'hello admin',
		body: "<h1>这是管理平台</h1>"
	})
})

router.get('/teacher', async function (ctx: any, next: Function) {
	debug(">>>teacher输出");
	await ctx.render('teacher', {
		title: 'hello teacher',
		body: "<h1>这是老师APP</h1>"
	})
})

router.get('/client', async function (ctx: any, next: Function) {
	debug(">>>client输出");
	await ctx.render('client', {
		title: 'hello client',
		body: "<h1>这是教学客户端</h1>"
	})
})

router.get('/others/a', async function (ctx: any, next: Function) {
	debug(">>>admin输出");
	await ctx.render('admin', {
		title: 'hello admin',
		body: "<h1>这是管理平台</h1>"
	})
})

router.get('/others/b', async function (ctx: any, next: Function) {
	debug(">>>admin输出");
	await ctx.render('admin', {
		title: 'hello admin',
		body: "<h1>这是管理平台</h1>"
	})
})

router.get('/others/c', async function (ctx: any, next: Function) {
	debug(">>>admin输出");
	await ctx.render('admin', {
		title: 'hello admin',
		body: "<h1>这是管理平台</h1>"
	})
})

/**
 * 进入协助申请页面
 */
router.get('/admin/help', async function (ctx: any, next: Function) {
	let userAgent = ctx.req.headers['user-agent'];
	let referer = ctx.req.headers['referer'];
	debug(">>>>>>>>>>>ask-for-help", userAgent, referer);
	let assistancies = await AssistanceModel.findAll();
	let assistancePeople = await AssistancePeopleModel.findAll();
	await ctx.render('ask-for-help', {
		title: '申请协助',
		userAgent,
		referer,
		assistancies,
		assistancePeople,
	})
})

/**
 * 创建协助
 */
router.post('/admin/help', async function (ctx: any, next: Function) {
	let args = ctx.request.body;
	debug(">>>>>>>>>>>>>post", args)
	let assistance = await AssistanceModel.create({
		title: args.title,
		description: args.desc,
		first_help_people: args.first_help_people,
		second_help_people: args.second_help_people,
		referer: args.referer,
		user_agent: args.user_agent,
		user_id: 1,
		state: 0
	})
	ctx.body = {
		msg: "创建成功",
		assistance: assistance
	}
})

/**
 * 创建协助人
 */
router.post('/admin/assitance-people', async function (ctx: any, next: Function) {
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
})

/**
 * 修改协助人
 */
router.patch('/admin/assitance-people', async function (ctx: any, next: Function) {
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
})

export default router
