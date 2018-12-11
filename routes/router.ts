import * as Router from 'koa-router';
import Admin from './admin';
import Platform from './platform';
import Teacher from './teacher';
import Client from './client';
import Test from './test';
import Other from './other';

export default () => {
    const router = new Router();

    router.get('/test', Test.index);

    router.get('/admin/people/features', Admin.createHelperFeature);
    router.post('/admin/features', Admin.createFeature);
    router.post('/admin/helper', Admin.createHelper);
    router.patch('/admin/helper', Admin.updateHelper);
    router.get('/admin/helper/features', Admin.createAssistancePeople);

    router.get('/platform/', Platform.index);
    router.post('/platform/teacher', Platform.teacher);
    router.get('/platform/helper', Platform.client);
    router.get('/platform/others/a', Platform.a);
    router.get('/platform/others/b', Platform.b);
    router.get('/platform/assistance-list', Platform.assistanceList);
    router.post('/platform/help', Platform.help);
    router.del('/platform/help/:id', Platform.delHelp);
    router.get('/platform/helper/features', Platform.helperFeatures);
    router.get('/platform/new-assistance', Platform.newAssistance);

    router.get('/teacher/', Teacher.index);
    router.get('/teacher/json', Teacher.json);
    router.get('/teacher/string', Teacher.string);
    router.get('/teacher/test', Teacher.test);

    router.get('/client/', Client.index);
    router.get('/client/bar', Client.bar);

    router.get('/others/', Other.index);
    router.get('/others/a', Other.a);
    router.get('/others/b', Other.b);
    router.get('/others/c', Other.c);

    return router;
}