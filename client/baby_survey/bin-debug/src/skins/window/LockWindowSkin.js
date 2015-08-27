var skins;
(function (skins) {
    var window;
    (function (window) {
        var LockWindowSkin = (function (_super) {
            __extends(LockWindowSkin, _super);
            function LockWindowSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.txtContent_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = LockWindowSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return LockWindowSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.__3_i = function () {
                var t = new egret.gui.Rect();
                this.__s(t, ["fillAlpha", "fillColor", "percentHeight", "percentWidth", "x", "y"], [1, 0x000000, 100, 100, 0, 0]);
                return t;
            };
            __egretProto__.txtContent_i = function () {
                var t = new egret.gui.Label();
                this.txtContent = t;
                this.__s(t, ["bold", "horizontalCenter", "text", "textAlign", "verticalCenter", "percentWidth"], [true, 0, "标签", "center", 0, 100]);
                return t;
            };
            LockWindowSkin._skinParts = ["txtContent"];
            return LockWindowSkin;
        })(egret.gui.Skin);
        window.LockWindowSkin = LockWindowSkin;
        LockWindowSkin.prototype.__class__ = "skins.window.LockWindowSkin";
    })(window = skins.window || (skins.window = {}));
})(skins || (skins = {}));
//# sourceMappingURL=LockWindowSkin.js.map