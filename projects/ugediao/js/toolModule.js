/*定义一个工具函数模块，该模块内的方法都是网页动画中需要使用的函数*/

function toolMoudle() {

    /*
            定义一个为对象绑定多个事件的函数，调用一次函数就可以绑定一次，
        该函数可以兼容低版本的浏览器
            参数：
                --obj         要绑定事件的对象
                --evenStr     事件字符串(不包括on)
                --callback    事件回调函数
    */

    function bind(obj, eventstr, callback) {
        //首先判断是什么版本的浏览器，对于不同版本的浏览器使用不同的方法
        if (obj.addEventListener) {
            //addEventListener是大部分浏览器使用的可以给同一个事件绑定多个响应函数的方法，如果该方法不存在，则换一个低版本浏览器适用的
            obj.addEventListener(eventstr, callback, false);
        } else {
            //attachEvent是IE8及以下浏览器适用的方法
            obj.attachEvent("on" + eventstr, function () {
                callback.call(obj);
            });
        }

    }




    //向模块外面暴露函数对象
    return {
        bind: bind,
    }

}
