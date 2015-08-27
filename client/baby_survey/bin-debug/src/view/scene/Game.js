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
        this._time = 0;
        this._level = data;
    }
    var __egretProto__ = Game.prototype;
    __egretProto__.init = function () {
        this.topBanner.setContent("探索地球", function () {
            GUIManager.showScene(new Menu());
        }, this);
        this.txtLevel.text = "关卡：" + this._level;
        this.txtScore.text = "积分：" + DC.getTotalScore();
        var data = DC.levelCfg["level" + this._level];
        this.txtQuestion.text = data.question;
        this.gameBoard = new GameBoard(this._level);
        this.playBoard.addElement(this.gameBoard);
        this._time = 0;
    };
    __egretProto__.addListeners = function () {
        egret.Ticker.getInstance().register(this.tickerHandler, this);
        this.btnReplay.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnReplay_touchBeginHandler, this);
        this.btnPause.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnPause_touchBeginHandler, this);
    };
    __egretProto__.removeListeners = function () {
        egret.Ticker.getInstance().unregister(this.tickerHandler, this);
        this.btnReplay.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnReplay_touchBeginHandler, this);
        this.btnPause.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnPause_touchBeginHandler, this);
    };
    __egretProto__.tickerHandler = function (dt) {
        if (false == DC.isPause) {
            this._time += dt;
            var secs = (this._time / 1000) >> 0;
            this.txtTime.text = "时间：" + secs + "秒";
            this.gameBoard.time = secs;
        }
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