"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Router = require("koa-router");
var admin_1 = require("./admin");
var platform_1 = require("./platform");
var teacher_1 = require("./teacher");
var client_1 = require("./client");
var test_1 = require("./test");
var other_1 = require("./other");
exports.default = (function () {
    var router = new Router();
    router.get('/test', test_1.default.index);
    router.get('/admin/people/features', admin_1.default.createHelperFeature);
    router.post('/admin/features', admin_1.default.createFeature);
    router.post('/admin/helper', admin_1.default.createHelper);
    router.patch('/admin/helper', admin_1.default.updateHelper);
    router.get('/admin/helper/features', admin_1.default.createAssistancePeople);
    router.get('/platform/', platform_1.default.index);
    router.post('/platform/teacher', platform_1.default.teacher);
    router.get('/platform/helper', platform_1.default.client);
    router.get('/platform/others/a', platform_1.default.a);
    router.get('/platform/others/b', platform_1.default.b);
    router.get('/platform/assistance-list', platform_1.default.assistanceList);
    router.post('/platform/help', platform_1.default.help);
    router.del('/platform/help/:id', platform_1.default.delHelp);
    router.get('/platform/helper/features', platform_1.default.helperFeatures);
    router.get('/platform/new-assistance', platform_1.default.newAssistance);
    router.get('/teacher/', teacher_1.default.index);
    router.get('/teacher/json', teacher_1.default.json);
    router.get('/teacher/string', teacher_1.default.string);
    router.get('/teacher/test', teacher_1.default.test);
    router.get('/client/', client_1.default.index);
    router.get('/client/bar', client_1.default.bar);
    router.get('/others/', other_1.default.index);
    router.get('/others/a', other_1.default.a);
    router.get('/others/b', other_1.default.b);
    router.get('/others/c', other_1.default.c);
    return router;
});
//# sourceMappingURL=router.js.map