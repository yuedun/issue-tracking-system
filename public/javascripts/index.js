/**
  项目JS主入口
  以依赖layui的layer和form模块为例
**/    
layui.define(['layer', 'form'], function(exports){
    //此块内容在被use的时候就执行
    var layer = layui.layer
    ,form = layui.form;
    
    // layer.msg('Hello World');
    function a(params) {
        console.log(">>>>>>>>>>function a")
    }
    function b(params) {
        console.log(">>>>>>>>>>function b")
    }
    exports('index', function(){
        //此块内容被use后择时执行
        // layer.msg('Hello World');
        return {
            a: a,
            b: b
        }
    }); //注意，这里是模块输出的核心，模块名必须和use时的模块名一致
  });  