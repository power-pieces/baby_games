/**
 *
 * @author
 *
 */
var RankItem = (function (_super) {
    __extends(RankItem, _super);
    function RankItem() {
        _super.call(this, skins.component.RankItemSkin);
    }
    var __egretProto__ = RankItem.prototype;
    __egretProto__.setInfo = function (rank, pic, name, score) {
        this._rank = rank;
        this._pic = pic;
        this._name = name;
        this._score = score;
        if (this.created) {
            this.init();
        }
    };
    __egretProto__.init = function () {
        //重写该代码来完成初始化
        this.txtName.text = this._name;
        this.txtScore.text = "" + this._score;
    };
    return RankItem;
})(ASkinCom);
RankItem.prototype.__class__ = "RankItem";
