﻿/**
* 网络通信类
* 示例：NetManager.call("login", { id: 1 }, this.onNetBack, this);      
*/
class NetManager
{

    private static _proxy: NetProxy;
    private static _callBack: Function;
    private static _params: any;
    private static _lock: LockWindow;

    //隐藏的网络调用，不会触发界面
    public static implicitCall(action: string, params: any, callBack: Function = null, thisObject: any = null): void
    {
        this._params = params;

        var np: NetProxy = new NetProxy();
        var url: string = DC.cfg.server;

        var args: any = {};
        args.mod = "user";
        args.action = action;
        args.params = JSON.stringify(params);

        np.request(url, callBack, thisObject, args);
    }
    

    public static call(action: string, params: any, callBack: Function, thisObject: any, label:string = "网络通信中"): void
    {
        if (null == this._lock)
        {
            this._lock = new LockWindow(label);
        }
        else
        {
            this._lock.setContent(label);
        }
        GUIManager.showWindow(this._lock);
        
        if (null != this._proxy)
        {
            GUIManager.showWindow(this._lock, "网络断开，请刷新重试!");
            return;
        }

        this._callBack = callBack.bind(thisObject);
        this._params = params;

        var np: NetProxy = new NetProxy();
        var url: string = DC.cfg.server;

        var args: any = {};
        args.mod = "user";
        args.action = action;
        args.params = JSON.stringify(params);

        //alert("传递的参数：" + args.params);

        np.request(url, this.onCallBack, this, args, egret.URLRequestMethod.GET, egret.URLLoaderDataFormat.TEXT);
        this._proxy = np;
    }

    private static onCallBack(jsonStr: string): void
    {
        console.log(jsonStr);
        GUIManager.closeWindow(this._lock);
        this._proxy = null;

        try {
            var data: any = JSON.parse(jsonStr);
            if (data.error > 0)
            {
                GUIManager.showWindow(this._lock, "错误：" + data.msg);                
            }
            else
            {
                this._callBack(data.data, this._params);
            }
        }
        catch (e)
        {            
            egret.gui.Alert.show("程序崩溃：" + e.message);
            egret.gui.Alert.show("程序崩溃：" + jsonStr);
            //ViewManager.instance.showPanel(new MessagePanel("程序崩溃：" + jsonStr), true, true);
        }
    }
    
}