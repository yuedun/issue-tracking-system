layui.config({
    base: '/javascripts/' //你存放新模块的目录，注意，不是layui的模块目录
    , version: false //一般用于更新模块缓存，默认不开启。设为true即让浏览器不缓存。也可以设为一个固定的值，如：201610
    , debug: true //用于开启调试模式，默认false，如果设为true，则JS模块的节点会保留在页面
}).use(['element', 'layer', 'login', 'home'], function () {
    var element = layui.element,
        layer = layui.layer,
        login = layui.login,
        home = layui.home;
    var aa = new login()
    aa.a();
    aa.b();
    home();
    element.on('nav(filter)', function (elem) {
        console.log(elem); //得到当前点击的DOM对象
    });
}); //加载入口
