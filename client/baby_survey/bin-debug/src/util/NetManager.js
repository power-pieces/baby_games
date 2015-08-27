/**
* 网络通信类
* 示例：NetManager.call("login", { id: 1 }, this.onNetBack, this);
*/
var NetManager = (function () {
    function NetManager() {
    }
    var __egretProto__ = NetManager.prototype;
    //隐藏的网络调用，不会触发界面
    NetManager.implicitCall = function (action, params, callBack, thisObject) {
        if (callBack === void 0) { callBack = null; }
        if (thisObject === void 0) { thisObject = null; }
        this._params = params;
        var np = new NetProxy();
        var url = DC.cfg.server;
        var args = {};
        args.mod = "user";
        args.action = action;
        args.params = JSON.stringify(params);
        np.request(url, callBack, thisObject, args);
    };
    NetManager.call = function (action, params, callBack, thisObject, label) {
        if (label === void 0) { label = "网络通信中"; }
        if (null == this._lock) {
            this._lock = new LockWindow(label);
        }
        else {
            this._lock.setContent(label);
        }
        GUIManager.showWindow(this._lock);
        if (null != this._proxy) {
            GUIManager.showWindow(this._lock, "网络断开，请刷新重试!");
            return;
        }
        this._callBack = callBack.bind(thisObject);
        this._params = params;
        var np = new NetProxy();
        var url = DC.cfg.server;
        var args = {};
        args.mod = "user";
        args.action = action;
        args.params = JSON.stringify(params);
        //alert("传递的参数：" + args.params);
        np.request(url, this.onCallBack, this, args, egret.URLRequestMethod.GET, egret.URLLoaderDataFormat.TEXT);
        this._proxy = np;
    };
    NetManager.onCallBack = function (jsonStr) {
        console.log(jsonStr);
        GUIManager.closeWindow(this._lock);
        this._proxy = null;
        try {
            var data = JSON.parse(jsonStr);
            if (data.error > 0) {
                GUIManager.showWindow(this._lock, "错误：" + data.msg);
            }
            else {
                this._callBack(data.data, this._params);
            }
        }
        catch (e) {
            egret.gui.Alert.show("程序崩溃：" + e.message);
            egret.gui.Alert.show("程序崩溃：" + jsonStr);
        }
    };
    return NetManager;
})();
NetManager.prototype.__class__ = "NetManager";
