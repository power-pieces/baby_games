var skins;
(function (skins) {
    var component;
    (function (component) {
        var RankItemSkin = (function (_super) {
            __extends(RankItemSkin, _super);
            function RankItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [120, 400]);
                this.elementsContent = [this.imgRank_i(), this.imgHead_i(), this.txtName_i(), this.txtScore_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = RankItemSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return RankItemSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.imgRank_i = function () {
                var t = new egret.gui.UIAsset();
                this.imgRank = t;
                this.__s(t, ["source", "x", "y"], ["box_jpg", 8, 13]);
                return t;
            };
            __egretProto__.imgHead_i = function () {
                var t = new egret.gui.UIAsset();
                this.imgHead = t;
                this.__s(t, ["source", "x", "y"], ["rank_1_png", 136, 34]);
                return t;
            };
            __egretProto__.txtName_i = function () {
                var t = new egret.gui.Label();
                this.txtName = t;
                this.__s(t, ["text", "textColor", "x", "y"], ["张小凡", 0x474747, 235, 15]);
                return t;
            };
            __egretProto__.txtScore_i = function () {
                var t = new egret.gui.Label();
                this.txtScore = t;
                this.__s(t, ["text", "textColor", "x", "y"], ["2210", 0x4C4C4C, 239, 63]);
                return t;
            };
            RankItemSkin._skinParts = ["imgRank", "imgHead", "txtName", "txtScore"];
            return RankItemSkin;
        })(egret.gui.Skin);
        component.RankItemSkin = RankItemSkin;
        RankItemSkin.prototype.__class__ = "skins.component.RankItemSkin";
    })(component = skins.component || (skins.component = {}));
})(skins || (skins = {}));
//# sourceMappingURL=RankItemSkin.js.map