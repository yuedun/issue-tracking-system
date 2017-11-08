layui.config({
    base: '/javascripts/' //你存放新模块的目录，注意，不是layui的模块目录
    , version: false //一般用于更新模块缓存，默认不开启。设为true即让浏览器不缓存。也可以设为一个固定的值，如：201610
    , debug: true //用于开启调试模式，默认false，如果设为true，则JS模块的节点会保留在页面
}).use(['element', 'layer', 'home'], function () {
    var element = layui.element,
        layer = layui.layer,
        home = layui.home;
    // var aa = new home()
    // aa.a();
    // aa.b();
    // home();
}); //加载入口
