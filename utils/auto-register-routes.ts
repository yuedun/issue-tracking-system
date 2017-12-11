/**
 * 项目根目录下的routes目录下的文件自动注册，无需在app.ts中手动注册路由
 */
import * as Koa from 'koa';
import * as Fs from 'fs';
import * as Path from 'path';

export function registerRoute(app: Koa){
    const files = Fs.readdirSync(Path.join(process.cwd(), "dest/routes"));
    for (let name of files) {
        let fileName = Path.join(process.cwd(), "dest/routes", name);
        if (Fs.statSync(fileName).isFile() && /\.js$/.test(fileName)) {
            let route = require(fileName);
            app.use(route.default.routes());
        }
    }
}
