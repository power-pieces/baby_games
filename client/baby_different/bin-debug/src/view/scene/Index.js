var Index = (function (_super) {
    __extends(Index, _super);
    function Index(data) {
        if (data === void 0) { data = null; }
        _super.call(this, skins.scene.IndexSkin);
    }
    var __egretProto__ = Index.prototype;
    __egretProto__.init = function () {
        this.topBanner.setContent("探索地球", function () {
            egret.gui.Alert.show("点击返回！");
        }, this);
    };
    __egretProto__.addListeners = function () {
        this.btnEnter.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnEnter_touchBegionHandler, this);
    };
    __egretProto__.removeListeners = function () {
        this.btnEnter.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnEnter_touchBegionHandler, this);
    };
    __egretProto__.dispose = function () {
        this.topBanner.dispose();
        _super.prototype.dispose.call(this);
    };
    __egretProto__.btnEnter_touchBegionHandler = function (e) {
        GUIManager.showScene(new Menu());
    };
    return Index;
})(ASkinCom);
Index.prototype.__class__ = "Index";
//# sourceMappingURL=Index.js.map