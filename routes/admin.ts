const debug = require('debug')('yuedun:admin');
import { select } from '../utils/db-connection';
import { default as HelperModel } from '../models/helper-model';
import { default as FeatureModel } from '../models/feature-model';
import { default as HelperFeatureModel } from '../models/helper-feature-relation-model';

class Controller {
	/**
	 * 协助人和功能关联
	 * createHelperFeature
	 */
	public async createHelperFeature(ctx: any) {
		let args = ctx.request.body;
		let peopleFeature = await HelperFeatureModel.create({
			helper_id: args.people_id,
			feature_id: args.feature_id
		})
		ctx.body = {
			msg: "创建成功",
			peopleFeature
		}
	}
	/**
	 * 创建功能模块
	 * createFeature
	 */
	public async createFeature(ctx: any) {
		let args = ctx.request.body;
		let feature = await FeatureModel.create({
			feature_name: args.feature_name
		})
		ctx.body = {
			msg: "创建成功",
			feature
		}
	}
	/**
 * 创建协助人
 */
	public async createHelper(ctx: any) {
		let args = ctx.request.body;
		debug(">>>>>>>>>>>>>post assistance people:", args)
		let assistancePeople = await HelperModel.create({
			user_name: args.user_name,
			mobile: args.mobile,
			email: args.email
		})
		ctx.body = {
			msg: "创建成功",
			assistancePeople
		}
	};

	/**
	 * 修改协助人
	 */
	public async updateHelper(ctx: any) {
		let args = ctx.request.body;
		debug(">>>>>>>>>>>>>post assistance people:", args)
		let assistancePeople = await HelperModel.update({
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
	};

	/**
	 * 协助人添加负责模块
	 */
	public async createAssistancePeople(ctx: any) {
		let args = ctx.request.body;
		let assistancePeople = await HelperModel.findByPk(args.person_id)
		assistancePeople.features = assistancePeople.features.concat(",", args.feature_name);
		assistancePeople.save();
		ctx.body = {
			msg: "修改成功",
			assistancePeople
		}
	};
}

export default new Controller();
