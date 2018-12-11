import { rf } from '../services/readFile';

class Controller {
	public async index(ctx: any) {
		await ctx.render('teacher', {
			title: 'hello teacher',
			body: "<h1>这是讲师APP</h1>"
		})
	};
	
	public async string(ctx: any) {
		ctx.body = 'koa2 string'
	}
	
	public async json(ctx: any) {
		ctx.body = {
			title: 'koa2 json'
		}
	}
	
	public async test(ctx: any) {
		const data = await rf('npm-debug.log');
		await ctx.render('test', { title: 'Koa2-Easy', data: data })
	}
}

export default new Controller();
