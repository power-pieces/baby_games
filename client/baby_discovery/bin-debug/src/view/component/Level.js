/**
 *
 * @author
 *
 */
var Level = (function (_super) {
    __extends(Level, _super);
    function Level() {
        _super.call(this, skins.component.LevelSkin);
        this._vo = null;
    }
    var __egretProto__ = Level.prototype;
    //设置关卡信息
    __egretProto__.setLevel = function (vo) {
        this._vo = vo;
        this.update();
    };
    __egretProto__.update = function () {
        if (null == this._vo) {
            //没玩的关卡
            this.visible = false;
        }
        else {
            //可玩的关卡
            this.visible = true;
        }
        this.imgStar0.visible = false;
        this.imgStar1.visible = false;
        this.imgStar2.visible = false;
        if (this._vo.score >= 100) {
            this.imgStar0.visible = true;
        }
        if (this._vo.score >= 200) {
            this.imgStar1.visible = true;
        }
        if (this._vo.score >= 300) {
            this.imgStar2.visible = true;
        }
    };
    __egretProto__.addListeners = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapHandler, this);
    };
    __egretProto__.removeListeners = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTapHandler, this);
    };
    __egretProto__.touchTapHandler = function (e) {
        GUIManager.showScene(new Game(this._vo.level));
    };
    return Level;
})(ASkinCom);
Level.prototype.__class__ = "Level";
//# sourceMappingURL=Level.js.map