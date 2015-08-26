/**
 * Jing
 * @author
 *
 */
var Result = (function (_super) {
    __extends(Result, _super);
    function Result() {
        _super.call(this, skins.scene.ResultSkin);
        this._state = "win";
    }
    var __egretProto__ = Result.prototype;
    __egretProto__.init = function () {
        if (this.data.success) {
            var score = this.getScore();
            if (DC.levels.length > this.data.level - 1) {
                var vo = DC.levels[this.data.level - 1];
                if (score > vo.score) {
                    vo.score = score;
                    //发送到服务器
                    new GameResultCmd().run(DC.id, DC.cfg.game_id, this.data.level, score);
                }
            }
            else {
                DC.levels[this.data.level - 1] = { level: this.data.level, score: score };
                //发送到服务器
                new GameResultCmd().run(DC.id, DC.cfg.game_id, this.data.level, score);
            }
            this.txtScore.text = "积分：" + DC.getTotalScore();
            this.topBanner.setContent("探索地球", function () {
                GUIManager.showScene(new Menu());
            }, this);
            if (10 == score) {
                this._state = "fail";
                this.txtGetScore.text = "分数：" + score;
            }
            this.imgStar0.visible = false;
            this.imgStar1.visible = false;
            this.imgStar2.visible = false;
            if (score >= 100) {
                this.imgStar0.visible = true;
            }
            if (score >= 200) {
                this.imgStar1.visible = true;
            }
            if (score >= 300) {
                this.imgStar2.visible = true;
            }
        }
        else {
            this._state = "defeat";
        }
        this.txtTime.text = "时间：" + this.data.time + "秒";
        this.invalidateSkinState();
    };
    __egretProto__.getScore = function () {
        if (this.data.time <= 5) {
            return 300;
        }
        else if (this.data.time <= 10) {
            return 200;
        }
        else if (this.data.time <= 15) {
            return 100;
        }
        else {
            return 10;
        }
    };
    __egretProto__.addListeners = function () {
        this.btnMenu.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnMenu_touchBeginHandler, this);
        this.btnReplay.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnReplay_touchBeginHandler, this);
        this.btnNext.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnNext_touchBeginHandler, this);
        this.btnRank.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnRank_touchBeginHandler, this);
    };
    __egretProto__.removeListeners = function () {
        this.btnMenu.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnMenu_touchBeginHandler, this);
        this.btnReplay.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnReplay_touchBeginHandler, this);
        this.btnNext.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnNext_touchBeginHandler, this);
        this.btnRank.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnRank_touchBeginHandler, this);
    };
    __egretProto__.btnRank_touchBeginHandler = function (e) {
        GUIManager.showScene(new Rank());
    };
    __egretProto__.btnNext_touchBeginHandler = function (e) {
        GUIManager.showScene(new Game(this.data.level + 1));
    };
    __egretProto__.btnReplay_touchBeginHandler = function (e) {
        GUIManager.showScene(new Game(this.data.level));
    };
    __egretProto__.btnMenu_touchBeginHandler = function (e) {
        GUIManager.showScene(new Menu());
    };
    __egretProto__.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    __egretProto__.getCurrentSkinState = function () {
        return this._state;
    };
    return Result;
})(ASkinCom);
Result.prototype.__class__ = "Result";
//# sourceMappingURL=Result.js.map