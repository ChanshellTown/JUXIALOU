//手机控制
String.prototype.contains = function (value) {
    if (!value)
        return false;
    return this.toLowerCase().indexOf(value.toLowerCase()) !== -1;
};
var website = (function () {
    return {
        isObject: function (value) {
            ///	<summary>
            ///	判断是否对象类型
            ///	</summary>
            return typeof value === "object";
        },
        joinUrl: function (url, param) {
            ///	<summary>
            ///	连接url与参数
            ///	</summary>
            ///	<param name="url" type="String">
            ///	 Url
            ///	</param>
            ///	<param name="param" type="String">
            ///	 参数
            ///	</param>
            ///	<returns type="String" />
            if (!param)
                return url;
            if (url.contains("?"))
                return url + "&" + getParams();
            return url + "?" + getParams();

            //获取参数列表
            function getParams() {
                if (website.isObject(param))
                    return $.param(param);
                return param;
            }
        },
        getNoCacheUrl: function (url, param) {
            ///	<summary>
            ///	获取不缓存的url
            ///	</summary>
            ///	<param name="url" type="String">
            ///	 Url
            ///	</param>
            ///	<param name="param" type="String">
            ///	 参数
            ///	</param>
            ///	<returns type="String" />
            url = website.joinUrl(url, param);
            return website.joinUrl(url, "randomnumber=" + Math.random());
        },
        ajax: function (options) {
            ///	<summary>
            ///	提交ajax请求
            ///	</summary>
            ///	<param name="options" type="Object">
            ///	jQuery ajax参数，范例：{url:"/a/b",type:"GET"},常用参数：
            /// 1. type,请求方式，默认为Post，可选值:"GET","POST";
            /// 2. dataType,服务器返回的数据类型，默认为json,可选值:"json","text","html","xml","script","jsonp";
            /// 3. url,服务端地址;
            /// 4. data: 发送参数,格式可以是参数字符串,比如"a=1&amp;b=2"，也可以是js对象,比如{a:1,b:2};
            /// 5. async: 是否异步，默认为true;
            /// 6. success: 成功回调函数;
            ///	</param>
            options = options || {};
            var fnSuccess = options.success;
            var fnError = options.error;
            options = $.extend({
                type: 'POST',
                dataType: "json"
            }, options, {
                success: function (result) {
                    if (fnSuccess)
                        fnSuccess(result);
                },
                error: function (result) {
                    if (fnError) {
                        fnError(result);
                        return;
                    }
                    website.ajaxError(result);
                }
            });
            $.ajax(options);
        },
        getById: function (id) {
            ///	<summary>
            ///	通过Id获取jQuery对象
            ///	</summary>
            ///	<param name="id" type="String">
            ///	元素id，如果传入对象，则直接返回
            ///	</param>
            return website.isObject(id) ? id : $("#" + id);
        },
        load: function (elementId, url, data, fnLoad) {
            ///	<summary>
            ///	从服务端加载html到指定元素
            ///	</summary>
            ///	<param name="elementId" type="String">
            ///	元素Id，也可以是jQuery对象
            ///	</param>
            ///	<param name="url" type="String">
            ///	服务端地址
            ///	</param>
            ///	<param name="data" type="String">
            ///	发送参数,格式可以是参数字符串,比如"a=1&amp;b=2"，也可以是js对象,比如{a:1,b:2}
            ///	</param>
            ///	<param name="fnLoad" type="Function">
            ///	成功加载回调函数
            ///	</param>
            var element = website.getById(elementId);
            url = url || element.attr("url");
            $.ajax({
                url: website.getNoCacheUrl(url, data),
                type: 'GET',
                dataType: "html",
                success: function (result) {
                    element.html(result);
                    website.initControls(element);
                    if (fnLoad)
                        fnLoad(result);
                }
            });
        },
        initControls: function (context) {
            ///	<summary>
            ///	初始化组件
            ///	</summary>
            ///	<param name="context" type="Object">
            ///	上下文
            ///	</param>
            if ($.initBootstrap)
                $.initBootstrap(context);
            if ($.initPagination)
                $.initPagination(context);
            if ($.initSelect2)
                $.initSelect2(context);
        },  //ajax错误处理
        ajaxError: function (xmlHttpRequest, ajaxOptions, error) {
            window.alert("Http状态: " + xmlHttpRequest.status + " " + xmlHttpRequest.statusText + "\n参数: " + ajaxOptions + "\n错误:" + error + "\n" + xmlHttpRequest.responseText);
        } 
    }; 
}());
 