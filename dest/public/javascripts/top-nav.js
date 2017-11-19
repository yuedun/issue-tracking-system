layui.config({
    base: '/javascripts/' //你存放新模块的目录，注意，不是layui的模块目录
    , version: false //一般用于更新模块缓存，默认不开启。设为true即让浏览器不缓存。也可以设为一个固定的值，如：201610
    , debug: true //用于开启调试模式，默认false，如果设为true，则JS模块的节点会保留在页面
}).use(['element', 'jquery'], function () {
    var $ = layui.jquery;
    var obj = null;
    var As = $('.layui-nav.layui-layout-left a');
    obj = As[0];
    for (var i = 1; i < As.length; i++) {
        if (window.location.href == As[i].href)
            obj = As[i];
    }
    $(obj).parent().addClass("layui-this");
    var ss = $(obj).parents(".layui-nav-child").length;
    if (ss) {
        $(obj).parents(".layui-nav-item").addClass("layui-this");
    }
})