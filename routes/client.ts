class Controller {
	public async index(ctx: any) {
		await ctx.render('client', {
			title: 'hello client',
			body: "<h1>这是教学客户端</h1>"
		})
	};
	
	public async bar(ctx: any) {
		ctx.body = 'this is a users/bar response'
	}
}

export default new Controller();
