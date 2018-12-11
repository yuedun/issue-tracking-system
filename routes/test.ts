class Controller {
	/**
	 * index
	 */
    public async index(ctx: any) {
        await ctx.render('client', {
            title: 'hello client',
            body: "<h1>这是教学客户端</h1>"
        })
    }
}

export default new Controller();