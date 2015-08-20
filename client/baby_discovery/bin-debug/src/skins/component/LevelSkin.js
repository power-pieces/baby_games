var skins;
(function (skins) {
    var component;
    (function (component) {
        var LevelSkin = (function (_super) {
            __extends(LevelSkin, _super);
            function LevelSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [160, 200]);
                this.elementsContent = [this.imgLevel_i(), this.imgStar0_i(), this.imgStar1_i(), this.imgStar2_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = LevelSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return LevelSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.imgStar0_i = function () {
                var t = new egret.gui.UIAsset();
                this.imgStar0 = t;
                this.__s(t, ["source", "x", "y"], ["rank_1_png", 2, 103.5]);
                return t;
            };
            __egretProto__.imgStar1_i = function () {
                var t = new egret.gui.UIAsset();
                this.imgStar1 = t;
                this.__s(t, ["source", "x", "y"], ["rank_1_png", 70, 103.5]);
                return t;
            };
            __egretProto__.imgStar2_i = function () {
                var t = new egret.gui.UIAsset();
                this.imgStar2 = t;
                this.__s(t, ["source", "x", "y"], ["rank_1_png", 137, 103.5]);
                return t;
            };
            __egretProto__.imgLevel_i = function () {
                var t = new egret.gui.UIAsset();
                this.imgLevel = t;
                this.__s(t, ["source", "x", "y"], ["box_jpg", 50, 0]);
                return t;
            };
            LevelSkin._skinParts = ["imgLevel", "imgStar0", "imgStar1", "imgStar2"];
            return LevelSkin;
        })(egret.gui.Skin);
        component.LevelSkin = LevelSkin;
        LevelSkin.prototype.__class__ = "skins.component.LevelSkin";
    })(component = skins.component || (skins.component = {}));
})(skins || (skins = {}));
