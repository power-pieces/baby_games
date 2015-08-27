var skins;
(function (skins) {
    var scene;
    (function (scene) {
        var RankSkin = (function (_super) {
            __extends(RankSkin, _super);
            function RankSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.topBanner_i(), this.__4_i(), this.__16_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = RankSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return RankSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.__11_i = function () {
                var t = new RankItem();
                t.skinName = skins.component.RankItemSkin;
                return t;
            };
            __egretProto__.__12_i = function () {
                var t = new RankItem();
                t.skinName = skins.component.RankItemSkin;
                return t;
            };
            __egretProto__.__13_i = function () {
                var t = new RankItem();
                t.skinName = skins.component.RankItemSkin;
                return t;
            };
            __egretProto__.__14_i = function () {
                var t = new RankItem();
                t.skinName = skins.component.RankItemSkin;
                return t;
            };
            __egretProto__.__15_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            __egretProto__.__16_i = function () {
                var t = new egret.gui.Scroller();
                this.__s(t, ["height", "percentWidth", "x", "y"], [600, 100, 0, 200]);
                t.viewport = this.groupRankItem_i();
                return t;
            };
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["bgImage", 0, 0]);
                return t;
            };
            __egretProto__.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "text", "y"], [0, "排行榜", 103]);
                return t;
            };
            __egretProto__.__5_i = function () {
                var t = new RankItem();
                t.skinName = skins.component.RankItemSkin;
                return t;
            };
            __egretProto__.__6_i = function () {
                var t = new RankItem();
                t.skinName = skins.component.RankItemSkin;
                return t;
            };
            __egretProto__.__7_i = function () {
                var t = new RankItem();
                t.skinName = skins.component.RankItemSkin;
                return t;
            };
            __egretProto__.__8_i = function () {
                var t = new RankItem();
                t.skinName = skins.component.RankItemSkin;
                return t;
            };
            __egretProto__.__9_i = function () {
                var t = new RankItem();
                t.skinName = skins.component.RankItemSkin;
                return t;
            };
            __egretProto__.groupRankItem_i = function () {
                var t = new egret.gui.Group();
                this.groupRankItem = t;
                t.layout = this.__15_i();
                t.elementsContent = [this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i()];
                return t;
            };
            __egretProto__.__10_i = function () {
                var t = new RankItem();
                t.skinName = skins.component.RankItemSkin;
                return t;
            };
            __egretProto__.topBanner_i = function () {
                var t = new Top();
                this.topBanner = t;
                this.__s(t, ["skinName", "x", "y"], [skins.component.TopSkin, 0, 0]);
                return t;
            };
            RankSkin._skinParts = ["topBanner", "groupRankItem"];
            return RankSkin;
        })(egret.gui.Skin);
        scene.RankSkin = RankSkin;
        RankSkin.prototype.__class__ = "skins.scene.RankSkin";
    })(scene = skins.scene || (skins.scene = {}));
})(skins || (skins = {}));
