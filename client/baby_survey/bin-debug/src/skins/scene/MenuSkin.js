var skins;
(function (skins) {
    var scene;
    (function (scene) {
        var MenuSkin = (function (_super) {
            __extends(MenuSkin, _super);
            function MenuSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.topBanner_i(), this.txtScore_i(), this.btnRank_i(), this.__5_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = MenuSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return MenuSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.__4_i = function () {
                var t = new egret.gui.Group();
                t.elementsContent = [this.levelMap_i()];
                return t;
            };
            __egretProto__.__5_i = function () {
                var t = new egret.gui.Scroller();
                this.__s(t, ["height", "percentWidth", "x", "y"], [600, 100, 0, 200]);
                t.viewport = this.__4_i();
                return t;
            };
            __egretProto__.btnRank_i = function () {
                var t = new egret.gui.Button();
                this.btnRank = t;
                this.__s(t, ["label", "x", "y"], ["排行榜", 302, 99]);
                return t;
            };
            __egretProto__.levelMap_i = function () {
                var t = new LevelMap();
                this.levelMap = t;
                t.skinName = skins.component.LevelMapSkin;
                return t;
            };
            __egretProto__.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["percentHeight", "source", "percentWidth", "x", "y"], [100, "bgImage", 100, 0, 0]);
                return t;
            };
            __egretProto__.topBanner_i = function () {
                var t = new Top();
                this.topBanner = t;
                this.__s(t, ["skinName", "x", "y"], [skins.component.TopSkin, 0, 0]);
                return t;
            };
            __egretProto__.txtScore_i = function () {
                var t = new egret.gui.Label();
                this.txtScore = t;
                this.__s(t, ["text", "x", "y"], ["积分：1000", 37, 110]);
                return t;
            };
            MenuSkin._skinParts = ["topBanner", "txtScore", "btnRank", "levelMap"];
            return MenuSkin;
        })(egret.gui.Skin);
        scene.MenuSkin = MenuSkin;
        MenuSkin.prototype.__class__ = "skins.scene.MenuSkin";
    })(scene = skins.scene || (skins.scene = {}));
})(skins || (skins = {}));
