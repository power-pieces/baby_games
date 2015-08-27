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
        new GetRankCmd().run(DC.id);
        this.topBanner.setContent("探索地球", function () {
            GUIManager.showScene(new Menu());
        }, this);
        this.groupRankItem.removeAllElements();
    };
    __egretProto__.addListeners = function () {
        NoticeManager.addNoticeAction(GameNotice.GOT_RANK, this.gotRankNotice, this);
    };
    __egretProto__.removeListeners = function () {
        NoticeManager.removeNoticeAction(GameNotice.GOT_RANK, this.gotRankNotice, this);
    };
    __egretProto__.gotRankNotice = function (n) {
        for (var k in n.data.list) {
            var rankVO = n.data.list[k];
            var item = new RankItem();
            item.setInfo(k, rankVO.pic, rankVO.name, rankVO.score);
            this.groupRankItem.addElement(item);
        }
    };
    __egretProto__.dispose = function () {
        this.topBanner.dispose();
        _super.prototype.dispose.call(this);
    };
    return Rank;
})(ASkinCom);
Rank.prototype.__class__ = "Rank";
