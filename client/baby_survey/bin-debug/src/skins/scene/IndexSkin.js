var skins;
(function (skins) {
    var scene;
    (function (scene) {
        var IndexSkin = (function (_super) {
            __extends(IndexSkin, _super);
            function IndexSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.topBanner_i(), this.imgLogo_i(), this.btnEnter_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = IndexSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return IndexSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.btnEnter_i = function () {
                var t = new egret.gui.Button();
                this.btnEnter = t;
                this.__s(t, ["horizontalCenter", "label", "y"], [0, "开始探索", 532]);
                return t;
            };
            __egretProto__.imgLogo_i = function () {
                var t = new egret.gui.UIAsset();
                this.imgLogo = t;
                this.__s(t, ["source", "x", "y"], ["box_jpg", 166, 151]);
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
            IndexSkin._skinParts = ["topBanner", "imgLogo", "btnEnter"];
            return IndexSkin;
        })(egret.gui.Skin);
        scene.IndexSkin = IndexSkin;
        IndexSkin.prototype.__class__ = "skins.scene.IndexSkin";
    })(scene = skins.scene || (skins.scene = {}));
})(skins || (skins = {}));
//# sourceMappingURL=IndexSkin.js.map