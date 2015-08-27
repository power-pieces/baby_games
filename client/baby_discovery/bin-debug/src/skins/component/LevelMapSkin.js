var skins;
(function (skins) {
    var component;
    (function (component) {
        var LevelMapSkin = (function (_super) {
            __extends(LevelMapSkin, _super);
            function LevelMapSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [1000, 480]);
                this.elementsContent = [this.level0_i(), this.level1_i(), this.level2_i(), this.level3_i(), this.level4_i(), this.level5_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = LevelMapSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return LevelMapSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.level1_i = function () {
                var t = new Level();
                this.level1 = t;
                this.__s(t, ["skinName", "x", "y"], [skins.component.LevelSkin, 255, 114]);
                return t;
            };
            __egretProto__.level2_i = function () {
                var t = new Level();
                this.level2 = t;
                this.__s(t, ["skinName", "x", "y"], [skins.component.LevelSkin, 37, 312]);
                return t;
            };
            __egretProto__.level3_i = function () {
                var t = new Level();
                this.level3 = t;
                this.__s(t, ["skinName", "x", "y"], [skins.component.LevelSkin, 265, 447]);
                return t;
            };
            __egretProto__.level4_i = function () {
                var t = new Level();
                this.level4 = t;
                this.__s(t, ["skinName", "x", "y"], [skins.component.LevelSkin, 36, 607]);
                return t;
            };
            __egretProto__.level5_i = function () {
                var t = new Level();
                this.level5 = t;
                this.__s(t, ["skinName", "x", "y"], [skins.component.LevelSkin, 273, 730]);
                return t;
            };
            __egretProto__.level0_i = function () {
                var t = new Level();
                this.level0 = t;
                this.__s(t, ["skinName", "x", "y"], [skins.component.LevelSkin, 17, 15]);
                return t;
            };
            LevelMapSkin._skinParts = ["level0", "level1", "level2", "level3", "level4", "level5"];
            return LevelMapSkin;
        })(egret.gui.Skin);
        component.LevelMapSkin = LevelMapSkin;
        LevelMapSkin.prototype.__class__ = "skins.component.LevelMapSkin";
    })(component = skins.component || (skins.component = {}));
})(skins || (skins = {}));
