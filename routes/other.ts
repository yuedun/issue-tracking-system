import { rf } from '../services/readFile';

class Controller {
	public async index(ctx: any) {
		await ctx.render('others', {
			title: 'hello teacher',
			body: "<h1>其他系统</h1>"
		})
	};
	
	public async a(ctx: any) {
		ctx.body = 'koa2 string'
	}
	
	public async b(ctx: any) {
		ctx.body = {
			title: 'koa2 json'
		}
	}
	
	public async c(ctx: any) {
		const data = await rf('npm-debug.log');
		await ctx.render('test', { title: 'Koa2-Easy', data: data })
	}
}

export default new Controller();
