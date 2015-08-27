var PauseWindow = (function (_super) {
    __extends(PauseWindow, _super);
    function PauseWindow() {
        _super.call(this, skins.window.PauseMenuSkin);
    }
    var __egretProto__ = PauseWindow.prototype;
    __egretProto__.init = function () {
        DC.isPause = true;
    };
    __egretProto__.addListeners = function () {
        this.btnContinue.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnContinue_touchBeginHandler, this);
        this.btnMenu.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnMenu_touchBeginHandler, this);
    };
    __egretProto__.removeListeners = function () {
        this.btnContinue.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnContinue_touchBeginHandler, this);
        this.btnMenu.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnMenu_touchBeginHandler, this);
    };
    __egretProto__.btnContinue_touchBeginHandler = function (e) {
        GUIManager.closeWindow(this);
    };
    __egretProto__.btnMenu_touchBeginHandler = function (e) {
        GUIManager.closeAllWindow();
        GUIManager.showScene(new Menu());
    };
    __egretProto__.dispose = function () {
        DC.isPause = false;
        _super.prototype.dispose.call(this);
    };
    return PauseWindow;
})(ASkinCom);
PauseWindow.prototype.__class__ = "PauseWindow";
