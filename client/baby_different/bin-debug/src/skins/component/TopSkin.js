var skins;
(function (skins) {
    var component;
    (function (component) {
        var TopSkin = (function (_super) {
            __extends(TopSkin, _super);
            function TopSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [80, 480]);
                this.elementsContent = [this.btnBack_i(), this.txtTitle_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = TopSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return TopSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.btnBack_i = function () {
                var t = new egret.gui.Button();
                this.btnBack = t;
                this.__s(t, ["label", "x", "y"], ["按钮", 13, 10]);
                return t;
            };
            __egretProto__.txtTitle_i = function () {
                var t = new egret.gui.Label();
                this.txtTitle = t;
                this.__s(t, ["bold", "fontFamily", "horizontalCenter", "text", "textColor", "verticalCenter"], [true, "新宋体", 0, "探索地球", 0xFFC7C7, 0]);
                return t;
            };
            TopSkin._skinParts = ["btnBack", "txtTitle"];
            return TopSkin;
        })(egret.gui.Skin);
        component.TopSkin = TopSkin;
        TopSkin.prototype.__class__ = "skins.component.TopSkin";
    })(component = skins.component || (skins.component = {}));
})(skins || (skins = {}));
//# sourceMappingURL=TopSkin.js.map