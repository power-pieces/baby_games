/**
 * Jing
 * @author
 *
 */
var Game = (function (_super) {
    __extends(Game, _super);
    function Game(data) {
        _super.call(this, skins.scene.GameSkin);
        this._level = 0;
        this._level = data;
    }
    var __egretProto__ = Game.prototype;
    __egretProto__.init = function () {
        this.topBanner.setContent("探索地球", function () {
            GUIManager.showScene(new Menu());
        }, this);
        this.txtLevel.text = "关卡：" + this._level;
    };
    __egretProto__.addListeners = function () {
        this.btnReplay.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnReplay_touchBeginHandler, this);
        this.btnPause.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnPause_touchBeginHandler, this);
    };
    __egretProto__.removeListeners = function () {
        this.btnReplay.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnReplay_touchBeginHandler, this);
        this.btnPause.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnPause_touchBeginHandler, this);
    };
    __egretProto__.btnReplay_touchBeginHandler = function (e) {
        GUIManager.showScene(new Game(this._level));
    };
    __egretProto__.btnPause_touchBeginHandler = function (e) {
        GUIManager.showWindow(new PauseWindow());
    };
    __egretProto__.dispose = function () {
        this.topBanner.dispose();
        _super.prototype.dispose.call(this);
    };
    return Game;
})(ASkinCom);
Game.prototype.__class__ = "Game";
//# sourceMappingURL=Game.js.map