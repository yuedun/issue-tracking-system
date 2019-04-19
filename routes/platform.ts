import * as Bluebird from "bluebird";

const debug = require('debug')('yuedun:platform');
import { select,default as sequelize } from '../utils/db-connection';
import { default as AssistanceModel } from '../models/assistance-model';
import { default as HelperModel } from '../models/helper-model';

interface AssistanceInfo extends AssistanceModel {
	user_name?: string;
	imageArr?: string[];
}
class Controller {
	/**
	 * ctx.render函数是koa-views中间件赋予ctx的，返回一个promise函数，所以需要用await修饰
	 */
	public async index(ctx: any) {
		debug(">>>admin输出");
		await ctx.render('platform', {
			title: 'hello platform',
			body: "<h1>这是管理平台</h1>"
		})
	};
	
	public async teacher(ctx: any) {
		debug(">>>teacher输出");
		await ctx.render('teacher', {
			title: 'hello teacher',
			body: "<h1>这是老师APP</h1>"
		})
	};
	
	public async client(ctx: any) {
		debug(">>>client输出");
		await ctx.render('client', {
			title: 'hello client',
			body: "<h1>这是教学客户端</h1>"
		})
	};
	
	public async a(ctx: any) {
		debug(">>>admin输出");
		await ctx.render('platform', {
			title: 'hello platform',
			body: "<h1>这是管理平台</h1>"
		})
	};
	
	public async b(ctx: any) {
		debug(">>>admin输出");
		await ctx.render('platform', {
			title: 'hello platform',
			body: "<h1>这是管理平台</h1>"
		})
	};
	
	public async c(ctx: any) {
		debug(">>>admin输出");
		await ctx.render('platform', {
			title: 'hello platform',
			body: "<h1>这是管理平台</h1>"
		})
	};
	
	/**
	 * 协助列表
	 */
	public async assistanceList(ctx: any) {
		let args = ctx.request.query;
		debug(">>>>args:", args)
		let userAgent = ctx.req.headers['user-agent'];
		let referer = ctx.req.headers['referer'];
		let pageIndex = args.pageIndex ? (args.pageIndex - 1) * 5 : 0;
		let assistancies = await AssistanceModel.findAll({
			offset: pageIndex,
			limit: 5,
			order: [['created_at', 'desc']]
		});
		let total = await AssistanceModel.count();
		let assistanceInfos: AssistanceInfo[] = assistancies;
		await Bluebird.map(assistanceInfos, async (item, index) => {
			let userRecord = await item.getUserModel();
			debug(userRecord.user_name)
			item.user_name = (userRecord && userRecord.user_name) ? userRecord.user_name : "缺省";//发起协助的用户名（业务用户users）
			item.imageArr = item.images ? item.imageArr = item.images.split(",") : [];
			return item;
		})
		await ctx.render('assistance-list', {
			title: '申请协助',
			userAgent,
			referer,
			currentIndex: args.pageIndex || 1,
			total,
			assistanceInfos
		})
	};
	
	/**
	 * 新建协助页面
	 */
	public async newAssistance(ctx: any) {
		let userAgent = ctx.req.headers['user-agent'];
		let referer = ctx.req.headers['referer'];
		let assistancies = await AssistanceModel.findAll({
			order: [['created_at', 'desc']]
		});
		let assistanceInfos: AssistanceInfo[] = assistancies;
		await ctx.render('new-assistance', {
			title: '申请协助',
			userAgent,
			referer,
			assistanceInfos,
			api: {
				assistance: '/platform/help'
			}
		})
	};
	
	/**
	 * 创建协助请求
	 */
	public async help(ctx: any) {
		// @ts-ignore
		let args = ctx.request.body;//request本身不带body属性，这种写法是由bodyparser添加的body属性，所以ts会报错，忽略即可
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
	};
	/**
	 * 删除协助
	 */
	public async delHelp(ctx: any) {
		let [id] = ctx.captures;
		debug(">>>>>>>>>>>>>delete", id)
		let assistance = await AssistanceModel.destroy({
			where: { id }
		})
		ctx.body = {
			msg: "删除成功"
		}
	};
	
	/**
	 * 获取协助人
	 * /platform/helper/features
	 */
	public async helperFeatures(ctx: any) {
		let args = ctx.request.query;
		let where: any = {};
		if (args.user_name) {
			where.user_name = { $like: `${args.user_name}%` };
		}
		
		let helperList = await HelperModel.findAll({
			attributes: ["id", "user_name", "features"],
			where
		})
		ctx.body = {
			data: {
				list: helperList
			}
		}
	};
}

export default new Controller()
