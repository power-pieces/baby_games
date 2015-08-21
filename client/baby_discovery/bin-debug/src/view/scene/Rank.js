/**
 * Jing
 * @author
 *
 */
var Rank = (function (_super) {
    __extends(Rank, _super);
    function Rank() {
        _super.call(this, skins.scene.RankSkin);
    }
    var __egretProto__ = Rank.prototype;
    __egretProto__.init = function () {
        this.topBanner.setContent("探索地球", function () {
            GUIManager.showScene(new Menu());
        }, this);
        this.groupRankItem.removeAllElements();
    };
    __egretProto__.addListeners = function () {
    };
    __egretProto__.removeListeners = function () {
    };
    __egretProto__.dispose = function () {
        this.topBanner.dispose();
        _super.prototype.dispose.call(this);
    };
    return Rank;
})(ASkinCom);
Rank.prototype.__class__ = "Rank";
//# sourceMappingURL=Rank.js.map