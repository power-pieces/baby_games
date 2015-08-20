/**
*
*/
var ASkinCom = (function (_super) {
    __extends(ASkinCom, _super);
    function ASkinCom(skin, data) {
        if (data === void 0) { data = null; }
        _super.call(this);
        this.skinName = skin;
        this.data = data;
    }
    var __egretProto__ = ASkinCom.prototype;
    __egretProto__.childrenCreated = function () {
        this.init();
        this.addListeners();
    };
    __egretProto__.init = function () {
        //重写该代码来完成初始化
    };
    __egretProto__.addListeners = function () {
        //重写代码来实现监听
    };
    __egretProto__.removeListeners = function () {
        //重写代码来释放监听
    };
    __egretProto__.dispose = function () {
        this.removeListeners();
    };
    return ASkinCom;
})(egret.gui.SkinnableComponent);
ASkinCom.prototype.__class__ = "ASkinCom";