function ajax(obj) {
    // 对实参处理
    obj = obj || {};
    // 定义局部变量
    var xmlhttp, type, url, async, dataType, data;
    // 默认type为GET
    type = obj.type || 'GET';
    type = trim(type).toUpperCase();
    // 接口
    url = obj.url
    url = trim(url);
    // 默认为异步请求
    async = obj.async || true;
    // 设置跨域
    dataType = obj.dataType || 'HTML';
    dataType = trim(dataType).toUpperCase();
    // 发送参数
    data = obj.data || {};
    // 删除左右空格
    function trim(str) {
        return str.replace(/^\s+|\s+$/g, "");
    };
    // 定义格式化参数函数
    var formatParams = function() {
            if (typeof(data) == "object") {
                var str = "";
                for (var pro in data) {
                    str += pro + "=" + data[pro] + "&";
                }
                data = str.substr(0, str.length - 1);
            }
            if (type == 'GET' || dataType == 'JSONP') {
                if (url.lastIndexOf('?') == -1) {
                    url += '?' + data;
                } else {
                    url += '&' + data;
                }
            }
        }
    // 第一步，创建xmlhttprequest对象用来和服务器交换数据。
    if (window.XMLHttpRequest) {
        //Chrome || Firefox
        xmlhttp = new XMLHttpRequest();
    } else {
        //IE
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // 跨域请求
    if (dataType == 'JSONP') {
        if (typeof(obj.beforeSend) == 'function') obj.beforeSend(xmlhttp);
        var callbackName = ('jsonp_' + Math.random()).replace(".", "");
        var oHead = document.getElementsByTagName('head')[0];
        data.callback = callbackName;
        var ele = document.createElement('script');
        ele.type = "text/javascript";
        ele.onerror = function() {
            console.log('failed');
            obj.error && obj.error("failed");
        };
        oHead.appendChild(ele);
        window[callbackName] = function(json) {
            oHead.removeChild(ele);
            window[callbackName] = null;
            obj.success && obj.success(json);
        };
        formatParams();
        ele.src = url;
        return;
    } else {
        formatParams();
        // 第二步，打开链接
        xmlhttp.open(type, url, async);
        // 设置响应头
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
        if (typeof(obj.beforeSend) == 'function') obj.beforeSend(xmlhttp);
        // 第三步，发送请求
        xmlhttp.send(data);
        // 第四步，响应处理
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.status != 200) {
                console.log(xmlhttp.status + 'failed');
                obj.error && obj.error(xmlhttp.status + 'failed');
                return;
            }
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                if (dataType == 'JSON') {
                    try {
                        res = JSON.parse(xmlhttp.responseText);
                    } catch (e) {
                        console.log('json格式错误');
                        obj.error('json格式错误');
                    }
                } else if (dataType == 'XML') {
                    res = xmlhttp.responseXML;
                } else {
                    res = xmlhttp.responseText;
                }
                obj.success && obj.success(res);
            }
        }
    }
}
