nodejs-koa
==========

基于koa框架的测试程序，需nodejs 7.X以上，stable版本

linux下npm脚本：
"dev": "DEBUG=yuedun:*& cd ./dest ./node_modules/.bin/nodemon ./dest/bin/www.js",
windows:
"dev": "set DEBUG=yuedun:*& cd ./dest & nodemon ./bin/www.js",

复制config-sample.ts改名为config.ts

koa.js获取url参数

`ctx.request.body`获取`post body`中的参数
`ctx.captures`获取`/user/123` `/user/:id`此类URL中的id,`ctx.captures`是个数组，按照URL中参数的顺序，ES6可以用这种方法接收：
`let [id] = ctx.captures`，如果是多个参数`/user/123/yuedun` `/user/:id/:name` `let [id, name] = ctx.captures`
`ctx.query`获取`/user/?name=yuedun`

# 需求设计

提供两个入口：
* 管理平台直接进入发起请求，可以获取到来源页面url
* 直接输入网址，发起请求

需要填写的栏位有标题，主体内容，紧急程度，第一二协助人，问题来源，后台需要记录的有发起人信息，解决状态，顶起（我也有该问题）

# 开发过程问题记录

```
//models-relation.ts

import AssistancePeopleModel from './assistance-people-model';
import AssistanceModel from './assistance-model';
import FeatureModel from './feature-model';
import PeopleFreatureModel from './people-feature-model';
import UsersModel from './users-model';

console.log(">>>>>>>>>>AssistanceModel", AssistanceModel);
console.log(">>>>>>>>>>AssistancePeopleModel", AssistancePeopleModel);
console.log(">>>>>>>>>>FeatureModel", FeatureModel);
console.log(">>>>>>>>>>PeopleFreatureModel", PeopleFreatureModel);
console.log(">>>>>>>>>>UsersModel", UsersModel);

AssistanceModel.belongsTo(UsersModel, { constraints: false });//不在数据库加约束
UsersModel.belongsToMany(FeatureModel, { through: "PeopleFeature", foreignKey: "assis_people_id" });
AssistancePeopleModel.belongsToMany(FeatureModel, { through: "PeopleFeature", foreignKey: "assis_people_id" });
FeatureModel.belongsToMany(AssistancePeopleModel, { through: "PeopleFeature", foreignKey: "feature_id" });

** 报错：**
AssistanceModel.belongsTo(UsersModel);
                ^
TypeError: Cannot read property 'belongsTo' of undefined
    at Object.<anonymous> (/home/hale/workspace/issue-tracking-system/models/models-relation.ts:13:17)
    at Module._compile (module.js:624:30)
    at Object.Module._extensions..js (module.js:635:10)
    at Module.load (module.js:545:32)
    at tryModuleLoad (module.js:508:12)
    at Function.Module._load (module.js:500:3)
    at Module.require (module.js:568:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (/home/hale/workspace/issue-tracking-system/utils/db-connection.ts:65:1)
    at Module._compile (module.js:624:30)
    at Object.Module._extensions..js (module.js:635:10)
    at Module.load (module.js:545:32)
    at tryModuleLoad (module.js:508:12)
    at Function.Module._load (module.js:500:3)
    at Module.require (module.js:568:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (/home/hale/workspace/issue-tracking-system/models/assistance-model.ts:2:1)
    at Module._compile (module.js:624:30)
    at Object.Module._extensions..js (module.js:635:10)
    at Module.load (module.js:545:32)
    at tryModuleLoad (module.js:508:12)
    at Function.Module._load (module.js:500:3)

```
或者
```
/home/hale/workspace/issue-tracking-system/node_modules/sequelize/lib/associations/mixin.js:81
source-map-support.js:419
      throw new Error(this.name + '.' + Utils.lowercaseFirst(Type.toString()) + ' called with something that\'s not a subclass of Sequelize.Model');
            ^
Error: Assistance.class BelongsTo extends Association {
source-map-support.js:422
  constructor(source, target, options) {
    super(source, target, options);
```
原因是执行models-relation.ts内容的时候`AssistanceModel`还未定义，或者是相互引用的的时候声明一个model时引用的另一个model还未定义，出现这种情况的原因是与执行顺序有关的，比如在业务代码中有以下代码顺序：
```
import { select } from '../utils/db-connection';
import { default as UserModel, ModelAttributes as UserPOJO, ModelInstance as UserInstance } from '../models/users-model';
import { default as AssistanceModel, ModelAttributes as AssistancePOJO, ModelInstance as AssistanceInstance } from '../models/assistance-model';
import { default as AssistancePeopleModel, ModelAttributes as AssistancePeoplePOJO, ModelInstance as AssistancePeopleInstance } from '../models/assistance-people-model';
import { default as FeatureModel, ModelAttributes as FeaturePOJO, ModelInstance as FeatureInstance } from '../models/feature-model';
```
看起来也没什么问题，先执行db-connection,然后定义model关系，但经过debug发现，`import { select } from '../utils/db-connection';`这行代码无效，所以直接执行的是这行：
`import { default as UserModel, ModelAttributes as UserPOJO, ModelInstance as UserInstance } from '../models/users-model';`
而要定义一个完整的UserModel又依赖了db-connection,那么就先执行db-connection的代码，db-connection又要等待model-relation执行完才算定义完成，结果就又会导入UserModel，但此时UserModel还未完成定义，所以就报undefiled错误，所以一定要保证db-connection执行完成，回到上面提到的说`import { select } from '../utils/db-connection';`无效，是因为在业务代码中没有使用到select，typescript在编译的时候如果遇到未使用的import就会忽略，在编译出的js代码中就不会包含，db-connection中的代码自然无法优先执行。