/**
 * Jing
 * @author
 *
 */
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        _super.call(this, skins.scene.MenuSkin);
    }
    var __egretProto__ = Menu.prototype;
    __egretProto__.init = function () {
        this.topBanner.setContent("探索地球", function () {
            GUIManager.showScene(new Index());
        }, this);
        this.txtScore.text = "积分：" + DC.getTotalScore();
        this.levelMap.update();
    };
    __egretProto__.addListeners = function () {
        this.btnRank.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnRank_touchBegionHandler, this);
    };
    __egretProto__.removeListeners = function () {
        this.btnRank.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.btnRank_touchBegionHandler, this);
    };
    __egretProto__.dispose = function () {
        this.topBanner.dispose();
        this.levelMap.dispose();
        _super.prototype.dispose.call(this);
    };
    __egretProto__.btnRank_touchBegionHandler = function (e) {
        GUIManager.showScene(new Rank());
    };
    return Menu;
})(ASkinCom);
Menu.prototype.__class__ = "Menu";
