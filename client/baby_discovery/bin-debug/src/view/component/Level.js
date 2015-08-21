/**
 *
 * @author
 *
 */
var Level = (function (_super) {
    __extends(Level, _super);
    function Level() {
        _super.call(this, skins.component.LevelSkin);
        this._level = -1;
    }
    var __egretProto__ = Level.prototype;
    //设置关卡信息
    __egretProto__.setLevel = function (level) {
    };
    __egretProto__.update = function () {
    };
    __egretProto__.addListeners = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapHandler, this);
    };
    __egretProto__.removeListeners = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapHandler, this);
    };
    __egretProto__.touchTapHandler = function (e) {
        GUIManager.showScene(new Game(this._level));
    };
    return Level;
})(ASkinCom);
Level.prototype.__class__ = "Level";
//# sourceMappingURL=Level.js.map